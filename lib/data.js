import { Member, Unit, User, Stats } from "./models";
import { connectToDB } from "./utils";


const getPreviousMonth = (date) => {
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  let previousMonth = currentMonth - 1;
  let previousYear = currentYear;

  if (previousMonth < 0) {
    previousMonth = 11;
    previousYear -= 1;
  }

  const previousMonthDate = new Date(previousYear, previousMonth, 2);
  return previousMonthDate;
}

export const fetchRankingStats = async () => {
  try {

    connectToDB();
  const prevMonth = getPreviousMonth(new Date());
  const cbDate = `${prevMonth.getFullYear()}${(prevMonth.getMonth()+1).toString().padStart(2, '0')}`;
  const clan = "Pecoriinu";
  const BestDps = await Stats.sortByDamage(cbDate, clan, true);
  const BestKills = await Stats.sortByKills(cbDate, clan, true);
  const BestSyncs = await Stats.sortBySyncs(cbDate, clan, true);
  const BestTimelines = await Stats.sortByTimelines(cbDate, clan, true);
  const BestTotal = await Stats.sortByTotal(cbDate, clan, true);
  const tmpDPS = BestDps[0];
  const tmpKills = BestKills[0];
  const tmpSyncs = BestSyncs[0];
  const tmpTLs = BestTimelines[0];
  const tmpTotal = BestTotal[0];


    return { tmpDPS,  tmpKills, tmpSyncs, tmpTLs, tmpTotal};
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch members!");
  }
}

export const fetchMembersWithStats = async (q, page) => {
  const regex = new RegExp(q, "i");
  
  const ITEM_PER_PAGE = parseInt(process.env.ITEM_PER_PAGE);

  try {
    const prevMonth = getPreviousMonth(new Date());
    connectToDB();
    const count = await Member.find({ member: { $regex: regex } }).count();
    const members = await Member.find({ member: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    const ids = members.map(doc => doc.id);
    const stats = await Stats.find({id: { $in: ids}}).where('cbdate').equals(`${prevMonth.getFullYear()}${(prevMonth.getMonth()+1).toString().padStart(2, '0')}`).populate('memberobj');
    return { count, stats };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch members!");
  }
}

export const fetchMembers = async (q, page) => {
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = parseInt(process.env.ITEM_PER_PAGE);

    try {
      connectToDB();
      const count = await Member.find({ member: { $regex: regex } }).count();
      const members = await Member.find({ member: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, members };
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch members!");
    }
  };




export const fetchUnits = async (q) => {
  const regex = new RegExp(q, "i");
    try {
      connectToDB();

      const units = await Unit.find({ name: { $regex: regex } }).select("-_id").lean();
      return units;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch units!");
    }
};

// export const syncDiscordUnit = async () => {
//   const url = process.env.DISCORD_URL;
//   const api = '/syncunit';
//   console.log("syncing unit with discord");
//   try {
//     const response = await fetch(url+api);
    
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.text();
//     console.log('Response:', data);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// };


export const fetchMember = async (id, returnlean = false) => {
    try {
      connectToDB();
      if(returnlean) return await Member.findOne({id:id}).lean();
      return await Member.findOne({id:id});
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch member!");
    }
  };

  export const fetchUser = async (id, returnlean = false) => {
    try {
      connectToDB();
      if(returnlean) return await User.findOne({id:id}).lean();
      return await User.findOne({id:id});
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };