import { Member, Unit } from "./models";
import { connectToDB } from "./utils";

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




export const fetchUnits = async () => {
    const data = [
      {
        "unitid": 105201,
        "name": "Rima",
        "imagelink": "https://redive.estertion.win/icon/unit/105261.webp",
        "imageid": 105261
      },
      {
        "unitid": 100701,
        "name": "Miyako",
        "imagelink": "https://redive.estertion.win/icon/unit/100761.webp",
        "imageid": 100761
      },
      {
        "unitid": 104501,
        "name": "Kuuka",
        "imagelink": "https://redive.estertion.win/icon/unit/104561.webp",
        "imageid": 104561
      },
      {
        "unitid": 127001,
        "name": "Kuuka (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/127031.webp",
        "imageid": 127031
      },
      {
        "unitid": 104701,
        "name": "Jun",
        "imagelink": "https://redive.estertion.win/icon/unit/104761.webp",
        "imageid": 104761
      },
      {
        "unitid": 114701,
        "name": "Muimi (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/114731.webp",
        "imageid": 114731
      },
      {
        "unitid": 109501,
        "name": "Kuuka (Ooedo)",
        "imagelink": "https://redive.estertion.win/icon/unit/109531.webp",
        "imageid": 109531
      },
      {
        "unitid": 119101,
        "name": "Kuuka (Noire)",
        "imagelink": "https://redive.estertion.win/icon/unit/119131.webp",
        "imageid": 119131
      },
      {
        "unitid": 124201,
        "name": "Jun (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/124231.webp",
        "imageid": 124231
      },
      {
        "unitid": 101701,
        "name": "Kaori",
        "imagelink": "https://redive.estertion.win/icon/unit/101761.webp",
        "imageid": 101761
      },
      {
        "unitid": 114501,
        "name": "Saren (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/114531.webp",
        "imageid": 114531
      },
      {
        "unitid": 113901,
        "name": "Tsumugi (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/113931.webp",
        "imageid": 113931
      },
      {
        "unitid": 108901,
        "name": "Rei (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/108931.webp",
        "imageid": 108931
      },
      {
        "unitid": 112501,
        "name": "Rin (DereMasu)",
        "imagelink": "https://redive.estertion.win/icon/unit/112531.webp",
        "imageid": 112531
      },
      {
        "unitid": 105801,
        "name": "Pecorine",
        "imagelink": "https://redive.estertion.win/icon/unit/105861.webp",
        "imageid": 105861
      },
      {
        "unitid": 180401,
        "name": "Pecorine (Princess)",
        "imagelink": "https://redive.estertion.win/icon/unit/180431.webp",
        "imageid": 180431
      },
      {
        "unitid": 117701,
        "name": "Kaori (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/117731.webp",
        "imageid": 117731
      },
      {
        "unitid": 127601,
        "name": "Ruka (Sarasaria)",
        "imagelink": "https://redive.estertion.win/icon/unit/127631.webp",
        "imageid": 127631
      },
      {
        "unitid": 105601,
        "name": "Ruka",
        "imagelink": "https://redive.estertion.win/icon/unit/105631.webp",
        "imageid": 105631
      },
      {
        "unitid": 111901,
        "name": "Kokkoro (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/111931.webp",
        "imageid": 111931
      },
      {
        "unitid": 126801,
        "name": "Yukari (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/126831.webp",
        "imageid": 126831
      },
      {
        "unitid": 102901,
        "name": "Nozomi",
        "imagelink": "https://redive.estertion.win/icon/unit/102961.webp",
        "imageid": 102961
      },
      {
        "unitid": 106101,
        "name": "Muimi",
        "imagelink": "https://redive.estertion.win/icon/unit/106161.webp",
        "imageid": 106161
      },
      {
        "unitid": 117101,
        "name": "Shizuru (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/117131.webp",
        "imageid": 117131
      },
      {
        "unitid": 121001,
        "name": "Pecorine (Overload)",
        "imagelink": "https://redive.estertion.win/icon/unit/121031.webp",
        "imageid": 121031
      },
      {
        "unitid": 104301,
        "name": "Makoto",
        "imagelink": "https://redive.estertion.win/icon/unit/104361.webp",
        "imageid": 104361
      },
      {
        "unitid": 115901,
        "name": "Makoto (Cinderella)",
        "imagelink": "https://redive.estertion.win/icon/unit/115931.webp",
        "imageid": 115931
      },
      {
        "unitid": 106501,
        "name": "Kaya",
        "imagelink": "https://redive.estertion.win/icon/unit/106531.webp",
        "imageid": 106531
      },
      {
        "unitid": 116601,
        "name": "Kaya (Time Travel)",
        "imagelink": "https://redive.estertion.win/icon/unit/116631.webp",
        "imageid": 116631
      },
      {
        "unitid": 108701,
        "name": "Hiyori (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/108731.webp",
        "imageid": 108731
      },
      {
        "unitid": 124901,
        "name": "Kaya (Liberator)",
        "imagelink": "https://redive.estertion.win/icon/unit/124931.webp",
        "imageid": 124931
      },
      {
        "unitid": 115801,
        "name": "Rima (Cinderella)",
        "imagelink": "https://redive.estertion.win/icon/unit/115831.webp",
        "imageid": 115831
      },
      {
        "unitid": 109601,
        "name": "Ninon (Ooedo)",
        "imagelink": "https://redive.estertion.win/icon/unit/109631.webp",
        "imageid": 109631
      },
      {
        "unitid": 103201,
        "name": "Akino",
        "imagelink": "https://redive.estertion.win/icon/unit/103261.webp",
        "imageid": 103261
      },
      {
        "unitid": 110401,
        "name": "Makoto (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/110431.webp",
        "imageid": 110431
      },
      {
        "unitid": 113601,
        "name": "Jun (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/113631.webp",
        "imageid": 113631
      },
      {
        "unitid": 123901,
        "name": "Matsuri (Wild)",
        "imagelink": "https://redive.estertion.win/icon/unit/123931.webp",
        "imageid": 123931
      },
      {
        "unitid": 116201,
        "name": "Chloe (Sports Festival)",
        "imagelink": "https://redive.estertion.win/icon/unit/116231.webp",
        "imageid": 116231
      },
      {
        "unitid": 100501,
        "name": "Matsuri",
        "imagelink": "https://redive.estertion.win/icon/unit/100561.webp",
        "imageid": 100561
      },
      {
        "unitid": 110801,
        "name": "Chloe",
        "imagelink": "https://redive.estertion.win/icon/unit/110831.webp",
        "imageid": 110831
      },
      {
        "unitid": 114101,
        "name": "Matsuri (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/114131.webp",
        "imageid": 114131
      },
      {
        "unitid": 109001,
        "name": "Eriko (Valentine)",
        "imagelink": "https://redive.estertion.win/icon/unit/109031.webp",
        "imageid": 109031
      },
      {
        "unitid": 114401,
        "name": "Akino (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/114431.webp",
        "imageid": 114431
      },
      {
        "unitid": 108601,
        "name": "Ayane (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/108631.webp",
        "imageid": 108631
      },
      {
        "unitid": 120001,
        "name": "Shizuru (Noire)",
        "imagelink": "https://redive.estertion.win/icon/unit/120031.webp",
        "imageid": 120031
      },
      {
        "unitid": 113101,
        "name": "Ruka (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/113131.webp",
        "imageid": 113131
      },
      {
        "unitid": 120801,
        "name": "Ruka (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/120831.webp",
        "imageid": 120831
      },
      {
        "unitid": 105401,
        "name": "Tsumugi",
        "imagelink": "https://redive.estertion.win/icon/unit/105461.webp",
        "imageid": 105461
      },
      {
        "unitid": 106601,
        "name": "Inori",
        "imagelink": "https://redive.estertion.win/icon/unit/106661.webp",
        "imageid": 106661
      },
      {
        "unitid": 180101,
        "name": "Hiyori (Princess)",
        "imagelink": "https://redive.estertion.win/icon/unit/180131.webp",
        "imageid": 180131
      },
      {
        "unitid": 100101,
        "name": "Hiyori",
        "imagelink": "https://redive.estertion.win/icon/unit/100161.webp",
        "imageid": 100161
      },
      {
        "unitid": 100401,
        "name": "Misogi",
        "imagelink": "https://redive.estertion.win/icon/unit/100461.webp",
        "imageid": 100461
      },
      {
        "unitid": 102301,
        "name": "Ayane",
        "imagelink": "https://redive.estertion.win/icon/unit/102361.webp",
        "imageid": 102361
      },
      {
        "unitid": 111201,
        "name": "Misogi (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/111231.webp",
        "imageid": 111231
      },
      {
        "unitid": 104601,
        "name": "Tamaki",
        "imagelink": "https://redive.estertion.win/icon/unit/104661.webp",
        "imageid": 104661
      },
      {
        "unitid": 116801,
        "name": "Tamaki (Workwear)",
        "imagelink": "https://redive.estertion.win/icon/unit/116831.webp",
        "imageid": 116831
      },
      {
        "unitid": 103701,
        "name": "Tomo",
        "imagelink": "https://redive.estertion.win/icon/unit/103761.webp",
        "imageid": 103761
      },
      {
        "unitid": 125001,
        "name": "Muimi (Liberator)",
        "imagelink": "https://redive.estertion.win/icon/unit/125031.webp",
        "imageid": 125031
      },
      {
        "unitid": 110901,
        "name": "Chieru",
        "imagelink": "https://redive.estertion.win/icon/unit/110931.webp",
        "imageid": 110931
      },
      {
        "unitid": 116301,
        "name": "Chieru (Sports Festival)",
        "imagelink": "https://redive.estertion.win/icon/unit/116331.webp",
        "imageid": 116331
      },
      {
        "unitid": 126701,
        "name": "Akino (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/126731.webp",
        "imageid": 126731
      },
      {
        "unitid": 107901,
        "name": "Tamaki (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/107931.webp",
        "imageid": 107931
      },
      {
        "unitid": 102701,
        "name": "Eriko",
        "imagelink": "https://redive.estertion.win/icon/unit/102761.webp",
        "imageid": 102761
      },
      {
        "unitid": 107501,
        "name": "Pecorine (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/107561.webp",
        "imageid": 107561
      },
      {
        "unitid": 122801,
        "name": "Misogi (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/122831.webp",
        "imageid": 122831
      },
      {
        "unitid": 123801,
        "name": "Christina (Wild)",
        "imagelink": "https://redive.estertion.win/icon/unit/123831.webp",
        "imageid": 123831
      },
      {
        "unitid": 102101,
        "name": "Kurumi",
        "imagelink": "https://redive.estertion.win/icon/unit/102161.webp",
        "imageid": 102161
      },
      {
        "unitid": 105701,
        "name": "Djeeta",
        "imagelink": "https://redive.estertion.win/icon/unit/105761.webp",
        "imageid": 105761
      },
      {
        "unitid": 111801,
        "name": "Pecorine (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/111831.webp",
        "imageid": 111831
      },
      {
        "unitid": 100301,
        "name": "Rei",
        "imagelink": "https://redive.estertion.win/icon/unit/100361.webp",
        "imageid": 100361
      },
      {
        "unitid": 122501,
        "name": "Rei (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/122531.webp",
        "imageid": 122531
      },
      {
        "unitid": 116501,
        "name": "Inori (Time Travel)",
        "imagelink": "https://redive.estertion.win/icon/unit/116531.webp",
        "imageid": 116531
      },
      {
        "unitid": 111701,
        "name": "Ilya (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/111731.webp",
        "imageid": 111731
      },
      {
        "unitid": 127101,
        "name": "Shinobu (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/127131.webp",
        "imageid": 127131
      },
      {
        "unitid": 113201,
        "name": "Anna (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/113231.webp",
        "imageid": 113231
      },
      {
        "unitid": 123201,
        "name": "Ayane (Explorer)",
        "imagelink": "https://redive.estertion.win/icon/unit/123231.webp",
        "imageid": 123231
      },
      {
        "unitid": 121201,
        "name": "Labyrista (Overload)",
        "imagelink": "https://redive.estertion.win/icon/unit/121231.webp",
        "imageid": 121231
      },
      {
        "unitid": 123601,
        "name": "Tomo (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/123631.webp",
        "imageid": 123631
      },
      {
        "unitid": 122401,
        "name": "Hiyori (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/122431.webp",
        "imageid": 122431
      },
      {
        "unitid": 111501,
        "name": "Christina (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/111531.webp",
        "imageid": 111531
      },
      {
        "unitid": 125601,
        "name": "Vikala",
        "imagelink": "https://redive.estertion.win/icon/unit/125631.webp",
        "imageid": 125631
      },
      {
        "unitid": 116901,
        "name": "Mifuyu (Workwear)",
        "imagelink": "https://redive.estertion.win/icon/unit/116931.webp",
        "imageid": 116931
      },
      {
        "unitid": 120701,
        "name": "Sheffy (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/120731.webp",
        "imageid": 120731
      },
      {
        "unitid": 104901,
        "name": "Shizuru",
        "imagelink": "https://redive.estertion.win/icon/unit/104961.webp",
        "imageid": 104961
      },
      {
        "unitid": 107101,
        "name": "Christina",
        "imagelink": "https://redive.estertion.win/icon/unit/107161.webp",
        "imageid": 107161
      },
      {
        "unitid": 121601,
        "name": "Inori (Phantom Thief)",
        "imagelink": "https://redive.estertion.win/icon/unit/121631.webp",
        "imageid": 121631
      },
      {
        "unitid": 121901,
        "name": "Anna (Pirate)",
        "imagelink": "https://redive.estertion.win/icon/unit/121931.webp",
        "imageid": 121931
      },
      {
        "unitid": 108501,
        "name": "Kurumi (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/108531.webp",
        "imageid": 108531
      },
      {
        "unitid": 119901,
        "name": "Miyako (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/119931.webp",
        "imageid": 119931
      },
      {
        "unitid": 127501,
        "name": "Saren (Sarasaria)",
        "imagelink": "https://redive.estertion.win/icon/unit/127531.webp",
        "imageid": 127531
      },
      {
        "unitid": 123301,
        "name": "Nea",
        "imagelink": "https://redive.estertion.win/icon/unit/123331.webp",
        "imageid": 123331
      },
      {
        "unitid": 117401,
        "name": "Tsumugi (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/117431.webp",
        "imageid": 117431
      },
      {
        "unitid": 102001,
        "name": "Mimi",
        "imagelink": "https://redive.estertion.win/icon/unit/102061.webp",
        "imageid": 102061
      },
      {
        "unitid": 122901,
        "name": "Mimi (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/122931.webp",
        "imageid": 122931
      },
      {
        "unitid": 103101,
        "name": "Shinobu",
        "imagelink": "https://redive.estertion.win/icon/unit/103161.webp",
        "imageid": 103161
      },
      {
        "unitid": 111301,
        "name": "Mimi (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/111331.webp",
        "imageid": 111331
      },
      {
        "unitid": 106401,
        "name": "Sheffy",
        "imagelink": "https://redive.estertion.win/icon/unit/106461.webp",
        "imageid": 106461
      },
      {
        "unitid": 112401,
        "name": "Uzuki (DereMasu)",
        "imagelink": "https://redive.estertion.win/icon/unit/112431.webp",
        "imageid": 112431
      },
      {
        "unitid": 127901,
        "name": "Pecorine (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/127931.webp",
        "imageid": 127931
      },
      {
        "unitid": 126401,
        "name": "Croce",
        "imagelink": "https://redive.estertion.win/icon/unit/126431.webp",
        "imageid": 126431
      },
      {
        "unitid": 114001,
        "name": "Rei (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/114031.webp",
        "imageid": 114031
      },
      {
        "unitid": 180301,
        "name": "Rei (Princess)",
        "imagelink": "https://redive.estertion.win/icon/unit/180331.webp",
        "imageid": 180331
      },
      {
        "unitid": 122001,
        "name": "Shinobu (Pirate)",
        "imagelink": "https://redive.estertion.win/icon/unit/122031.webp",
        "imageid": 122031
      },
      {
        "unitid": 109101,
        "name": "Shizuru (Valentine)",
        "imagelink": "https://redive.estertion.win/icon/unit/109131.webp",
        "imageid": 109131
      },
      {
        "unitid": 112801,
        "name": "Mahiru (Ranger)",
        "imagelink": "https://redive.estertion.win/icon/unit/112831.webp",
        "imageid": 112831
      },
      {
        "unitid": 103301,
        "name": "Mahiru",
        "imagelink": "https://redive.estertion.win/icon/unit/103361.webp",
        "imageid": 103361
      },
      {
        "unitid": 119201,
        "name": "Mahiru (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/119231.webp",
        "imageid": 119231
      },
      {
        "unitid": 114301,
        "name": "Tomo (Magical)",
        "imagelink": "https://redive.estertion.win/icon/unit/114331.webp",
        "imageid": 114331
      },
      {
        "unitid": 103401,
        "name": "Yukari",
        "imagelink": "https://redive.estertion.win/icon/unit/103461.webp",
        "imageid": 103461
      },
      {
        "unitid": 126001,
        "name": "Quria (Fallen)",
        "imagelink": "https://redive.estertion.win/icon/unit/126031.webp",
        "imageid": 126031
      },
      {
        "unitid": 117001,
        "name": "Eriko (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/117031.webp",
        "imageid": 117031
      },
      {
        "unitid": 114601,
        "name": "Yukari (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/114631.webp",
        "imageid": 114631
      },
      {
        "unitid": 105301,
        "name": "Monika",
        "imagelink": "https://redive.estertion.win/icon/unit/105361.webp",
        "imageid": 105361
      },
      {
        "unitid": 103001,
        "name": "Ninon",
        "imagelink": "https://redive.estertion.win/icon/unit/103061.webp",
        "imageid": 103061
      },
      {
        "unitid": 117201,
        "name": "Nozomi (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/117231.webp",
        "imageid": 117231
      },
      {
        "unitid": 111601,
        "name": "Nozomi (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/111631.webp",
        "imageid": 111631
      },
      {
        "unitid": 122201,
        "name": "Yukari (Camp)",
        "imagelink": "https://redive.estertion.win/icon/unit/122231.webp",
        "imageid": 122231
      },
      {
        "unitid": 104801,
        "name": "Mifuyu",
        "imagelink": "https://redive.estertion.win/icon/unit/104861.webp",
        "imageid": 104861
      },
      {
        "unitid": 121701,
        "name": "Akino (Akino&Saren)",
        "imagelink": "https://redive.estertion.win/icon/unit/121731.webp",
        "imageid": 121731
      },
      {
        "unitid": 121801,
        "name": "Saren (Akino&Saren)",
        "imagelink": "https://redive.estertion.win/icon/unit/121831.webp",
        "imageid": 121831
      },
      {
        "unitid": 180901,
        "name": "Akino&Saren",
        "imagelink": "https://redive.estertion.win/icon/unit/180931.webp",
        "imageid": 180931
      },
      {
        "unitid": 112701,
        "name": "Rin (Ranger)",
        "imagelink": "https://redive.estertion.win/icon/unit/112731.webp",
        "imageid": 112731
      },
      {
        "unitid": 124801,
        "name": "Nozomi (Liberator)",
        "imagelink": "https://redive.estertion.win/icon/unit/124831.webp",
        "imageid": 124831
      },
      {
        "unitid": 120901,
        "name": "Ilya (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/120931.webp",
        "imageid": 120931
      },
      {
        "unitid": 104401,
        "name": "Ilya",
        "imagelink": "https://redive.estertion.win/icon/unit/104461.webp",
        "imageid": 104461
      },
      {
        "unitid": 110501,
        "name": "Kaori (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/110531.webp",
        "imageid": 110531
      },
      {
        "unitid": 102801,
        "name": "Saren",
        "imagelink": "https://redive.estertion.win/icon/unit/102861.webp",
        "imageid": 102861
      },
      {
        "unitid": 124101,
        "name": "Yori (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/124131.webp",
        "imageid": 124131
      },
      {
        "unitid": 124001,
        "name": "Akari (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/124031.webp",
        "imageid": 124031
      },
      {
        "unitid": 100901,
        "name": "Anna",
        "imagelink": "https://redive.estertion.win/icon/unit/100961.webp",
        "imageid": 100961
      },
      {
        "unitid": 108101,
        "name": "Shinobu (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/108131.webp",
        "imageid": 108131
      },
      {
        "unitid": 125501,
        "name": "Djeeta (Warlock)",
        "imagelink": "https://redive.estertion.win/icon/unit/125531.webp",
        "imageid": 125531
      },
      {
        "unitid": 126301,
        "name": "Yuki (Ceremonial)",
        "imagelink": "https://redive.estertion.win/icon/unit/126331.webp",
        "imageid": 126331
      },
      {
        "unitid": 125201,
        "name": "Monika (Cafe)",
        "imagelink": "https://redive.estertion.win/icon/unit/125231.webp",
        "imageid": 125231
      },
      {
        "unitid": 125801,
        "name": "Riri (Fallen)",
        "imagelink": "https://redive.estertion.win/icon/unit/125831.webp",
        "imageid": 125831
      },
      {
        "unitid": 180801,
        "name": "Misogi&Mimi&Kyouka",
        "imagelink": "https://redive.estertion.win/icon/unit/180831.webp",
        "imageid": 180831
      },
      {
        "unitid": 113301,
        "name": "Nanaka (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/113331.webp",
        "imageid": 113331
      },
      {
        "unitid": 126101,
        "name": "Precia (Fallen)",
        "imagelink": "https://redive.estertion.win/icon/unit/126131.webp",
        "imageid": 126131
      },
      {
        "unitid": 108001,
        "name": "Mifuyu (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/108031.webp",
        "imageid": 108031
      },
      {
        "unitid": 105901,
        "name": "Kokkoro",
        "imagelink": "https://redive.estertion.win/icon/unit/105961.webp",
        "imageid": 105961
      },
      {
        "unitid": 113001,
        "name": "Ayumi (Wonder)",
        "imagelink": "https://redive.estertion.win/icon/unit/113031.webp",
        "imageid": 113031
      },
      {
        "unitid": 105501,
        "name": "Ayumi",
        "imagelink": "https://redive.estertion.win/icon/unit/105561.webp",
        "imageid": 105561
      },
      {
        "unitid": 117801,
        "name": "Ninon (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/117831.webp",
        "imageid": 117831
      },
      {
        "unitid": 117301,
        "name": "Chika (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/117331.webp",
        "imageid": 117331
      },
      {
        "unitid": 109401,
        "name": "Grea",
        "imagelink": "https://redive.estertion.win/icon/unit/109431.webp",
        "imageid": 109431
      },
      {
        "unitid": 116701,
        "name": "Aoi (Workwear)",
        "imagelink": "https://redive.estertion.win/icon/unit/116731.webp",
        "imageid": 116731
      },
      {
        "unitid": 114201,
        "name": "Monika (Magical)",
        "imagelink": "https://redive.estertion.win/icon/unit/114231.webp",
        "imageid": 114231
      },
      {
        "unitid": 113701,
        "name": "Akari (Angel)",
        "imagelink": "https://redive.estertion.win/icon/unit/113731.webp",
        "imageid": 113731
      },
      {
        "unitid": 113801,
        "name": "Yori (Angel)",
        "imagelink": "https://redive.estertion.win/icon/unit/113831.webp",
        "imageid": 113831
      },
      {
        "unitid": 115501,
        "name": "Kokkoro (Ceremonial)",
        "imagelink": "https://redive.estertion.win/icon/unit/115531.webp",
        "imageid": 115531
      },
      {
        "unitid": 107601,
        "name": "Kokkoro (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/107661.webp",
        "imageid": 107661
      },
      {
        "unitid": 109701,
        "name": "Rem",
        "imagelink": "https://redive.estertion.win/icon/unit/109731.webp",
        "imageid": 109731
      },
      {
        "unitid": 109801,
        "name": "Ram",
        "imagelink": "https://redive.estertion.win/icon/unit/109831.webp",
        "imageid": 109831
      },
      {
        "unitid": 102601,
        "name": "Rin",
        "imagelink": "https://redive.estertion.win/icon/unit/102661.webp",
        "imageid": 102661
      },
      {
        "unitid": 117501,
        "name": "Mitsuki (Ooedo)",
        "imagelink": "https://redive.estertion.win/icon/unit/117531.webp",
        "imageid": 117531
      },
      {
        "unitid": 122601,
        "name": "Yui (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/122631.webp",
        "imageid": 122631
      },
      {
        "unitid": 180501,
        "name": "Kokkoro (Princess)",
        "imagelink": "https://redive.estertion.win/icon/unit/180531.webp",
        "imageid": 180531
      },
      {
        "unitid": 106801,
        "name": "Labyrista",
        "imagelink": "https://redive.estertion.win/icon/unit/106831.webp",
        "imageid": 106831
      },
      {
        "unitid": 115001,
        "name": "Neneka (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/115031.webp",
        "imageid": 115031
      },
      {
        "unitid": 122301,
        "name": "Vampy",
        "imagelink": "https://redive.estertion.win/icon/unit/122331.webp",
        "imageid": 122331
      },
      {
        "unitid": 105101,
        "name": "Mitsuki",
        "imagelink": "https://redive.estertion.win/icon/unit/105161.webp",
        "imageid": 105161
      },
      {
        "unitid": 113401,
        "name": "Hatsune (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/113431.webp",
        "imageid": 113431
      },
      {
        "unitid": 126201,
        "name": "Ilya (Ceremonial)",
        "imagelink": "https://redive.estertion.win/icon/unit/126231.webp",
        "imageid": 126231
      },
      {
        "unitid": 100601,
        "name": "Akari",
        "imagelink": "https://redive.estertion.win/icon/unit/100661.webp",
        "imageid": 100661
      },
      {
        "unitid": 102201,
        "name": "Yori",
        "imagelink": "https://redive.estertion.win/icon/unit/102261.webp",
        "imageid": 102261
      },
      {
        "unitid": 181001,
        "name": "Anne&Grea",
        "imagelink": "https://redive.estertion.win/icon/unit/181031.webp",
        "imageid": 181031
      },
      {
        "unitid": 115601,
        "name": "Yui (Ceremonial)",
        "imagelink": "https://redive.estertion.win/icon/unit/115631.webp",
        "imageid": 115631
      },
      {
        "unitid": 125701,
        "name": "Karin (Alchemist)",
        "imagelink": "https://redive.estertion.win/icon/unit/125731.webp",
        "imageid": 125731
      },
      {
        "unitid": 123501,
        "name": "Rin (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/123531.webp",
        "imageid": 123531
      },
      {
        "unitid": 110301,
        "name": "Saren (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/110331.webp",
        "imageid": 110331
      },
      {
        "unitid": 121101,
        "name": "Kyaru (Overload)",
        "imagelink": "https://redive.estertion.win/icon/unit/121131.webp",
        "imageid": 121131
      },
      {
        "unitid": 108201,
        "name": "Miyako (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/108231.webp",
        "imageid": 108231
      },
      {
        "unitid": 121501,
        "name": "Ayumi (Phantom Thief)",
        "imagelink": "https://redive.estertion.win/icon/unit/121531.webp",
        "imageid": 121531
      },
      {
        "unitid": 124701,
        "name": "Mitsuki (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/124731.webp",
        "imageid": 124731
      },
      {
        "unitid": 106301,
        "name": "Arisa",
        "imagelink": "https://redive.estertion.win/icon/unit/106361.webp",
        "imageid": 106361
      },
      {
        "unitid": 109201,
        "name": "Anne",
        "imagelink": "https://redive.estertion.win/icon/unit/109231.webp",
        "imageid": 109231
      },
      {
        "unitid": 109301,
        "name": "Lou",
        "imagelink": "https://redive.estertion.win/icon/unit/109331.webp",
        "imageid": 109331
      },
      {
        "unitid": 116001,
        "name": "Maho (Cinderella)",
        "imagelink": "https://redive.estertion.win/icon/unit/116031.webp",
        "imageid": 116031
      },
      {
        "unitid": 126601,
        "name": "Neneka (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/126631.webp",
        "imageid": 126631
      },
      {
        "unitid": 106901,
        "name": "Kaiser Insight",
        "imagelink": "https://redive.estertion.win/icon/unit/106931.webp",
        "imageid": 106931
      },
      {
        "unitid": 107001,
        "name": "Neneka",
        "imagelink": "https://redive.estertion.win/icon/unit/107031.webp",
        "imageid": 107031
      },
      {
        "unitid": 110701,
        "name": "Aoi (Transfer Student)",
        "imagelink": "https://redive.estertion.win/icon/unit/110731.webp",
        "imageid": 110731
      },
      {
        "unitid": 126901,
        "name": "Ranpha (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/126931.webp",
        "imageid": 126931
      },
      {
        "unitid": 112001,
        "name": "Kyaru (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/112031.webp",
        "imageid": 112031
      },
      {
        "unitid": 112601,
        "name": "Mio (DereMasu)",
        "imagelink": "https://redive.estertion.win/icon/unit/112631.webp",
        "imageid": 112631
      },
      {
        "unitid": 113501,
        "name": "Misato (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/113531.webp",
        "imageid": 113531
      },
      {
        "unitid": 124601,
        "name": "Misato (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/124631.webp",
        "imageid": 124631
      },
      {
        "unitid": 101101,
        "name": "Rino",
        "imagelink": "https://redive.estertion.win/icon/unit/101161.webp",
        "imageid": 101161
      },
      {
        "unitid": 101601,
        "name": "Suzuna",
        "imagelink": "https://redive.estertion.win/icon/unit/101661.webp",
        "imageid": 101661
      },
      {
        "unitid": 110001,
        "name": "Suzuna (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/110031.webp",
        "imageid": 110031
      },
      {
        "unitid": 124501,
        "name": "Homare (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/124531.webp",
        "imageid": 124531
      },
      {
        "unitid": 103801,
        "name": "Shiori",
        "imagelink": "https://redive.estertion.win/icon/unit/103861.webp",
        "imageid": 103861
      },
      {
        "unitid": 125401,
        "name": "Shiori (Ranger)",
        "imagelink": "https://redive.estertion.win/icon/unit/125431.webp",
        "imageid": 125431
      },
      {
        "unitid": 112301,
        "name": "Shiori (Magical)",
        "imagelink": "https://redive.estertion.win/icon/unit/112331.webp",
        "imageid": 112331
      },
      {
        "unitid": 119001,
        "name": "Io (Noire)",
        "imagelink": "https://redive.estertion.win/icon/unit/119031.webp",
        "imageid": 119031
      },
      {
        "unitid": 101801,
        "name": "Io",
        "imagelink": "https://redive.estertion.win/icon/unit/101861.webp",
        "imageid": 101861
      },
      {
        "unitid": 110101,
        "name": "Io (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/110131.webp",
        "imageid": 110131
      },
      {
        "unitid": 102501,
        "name": "Suzume",
        "imagelink": "https://redive.estertion.win/icon/unit/102561.webp",
        "imageid": 102561
      },
      {
        "unitid": 112101,
        "name": "Suzume (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/112131.webp",
        "imageid": 112131
      },
      {
        "unitid": 128001,
        "name": "Creditta (Christmas))",
        "imagelink": "https://redive.estertion.win/icon/unit/128031.webp",
        "imageid": 128031
      },
      {
        "unitid": 109901,
        "name": "Emilia",
        "imagelink": "https://redive.estertion.win/icon/unit/109931.webp",
        "imageid": 109931
      },
      {
        "unitid": 106701,
        "name": "Homare",
        "imagelink": "https://redive.estertion.win/icon/unit/106731.webp",
        "imageid": 106731
      },
      {
        "unitid": 101401,
        "name": "Kasumi",
        "imagelink": "https://redive.estertion.win/icon/unit/101461.webp",
        "imageid": 101461
      },
      {
        "unitid": 112201,
        "name": "Kasumi (Magical)",
        "imagelink": "https://redive.estertion.win/icon/unit/112231.webp",
        "imageid": 112231
      },
      {
        "unitid": 112901,
        "name": "Rino (Wonder)",
        "imagelink": "https://redive.estertion.win/icon/unit/112931.webp",
        "imageid": 112931
      },
      {
        "unitid": 118201,
        "name": "Misora",
        "imagelink": "https://redive.estertion.win/icon/unit/118231.webp",
        "imageid": 118231
      },
      {
        "unitid": 121301,
        "name": "Kurumi (Stage)",
        "imagelink": "https://redive.estertion.win/icon/unit/121331.webp",
        "imageid": 121331
      },
      {
        "unitid": 122101,
        "name": "Aoi (Camp)",
        "imagelink": "https://redive.estertion.win/icon/unit/122131.webp",
        "imageid": 122131
      },
      {
        "unitid": 180701,
        "name": "Hatsune&Shiori",
        "imagelink": "https://redive.estertion.win/icon/unit/180731.webp",
        "imageid": 180731
      },
      {
        "unitid": 101501,
        "name": "Misato",
        "imagelink": "https://redive.estertion.win/icon/unit/101561.webp",
        "imageid": 101561
      },
      {
        "unitid": 115701,
        "name": "Kasumi (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/115731.webp",
        "imageid": 115731
      },
      {
        "unitid": 101301,
        "name": "Nanaka",
        "imagelink": "https://redive.estertion.win/icon/unit/101361.webp",
        "imageid": 101361
      },
      {
        "unitid": 126501,
        "name": "Lyrael",
        "imagelink": "https://redive.estertion.win/icon/unit/126531.webp",
        "imageid": 126531
      },
      {
        "unitid": 123701,
        "name": "Nanaka (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/123731.webp",
        "imageid": 123731
      },
      {
        "unitid": 121401,
        "name": "Misaki (Stage)",
        "imagelink": "https://redive.estertion.win/icon/unit/121431.webp",
        "imageid": 121431
      },
      {
        "unitid": 108801,
        "name": "Yui (New Year)",
        "imagelink": "https://redive.estertion.win/icon/unit/108831.webp",
        "imageid": 108831
      },
      {
        "unitid": 123001,
        "name": "Ames",
        "imagelink": "https://redive.estertion.win/icon/unit/123031.webp",
        "imageid": 123031
      },
      {
        "unitid": 180601,
        "name": "Kyaru (Princess)",
        "imagelink": "https://redive.estertion.win/icon/unit/180631.webp",
        "imageid": 180631
      },
      {
        "unitid": 106001,
        "name": "Kyaru",
        "imagelink": "https://redive.estertion.win/icon/unit/106061.webp",
        "imageid": 106061
      },
      {
        "unitid": 127301,
        "name": "Suzuna (Transfer Student)",
        "imagelink": "https://redive.estertion.win/icon/unit/127331.webp",
        "imageid": 127331
      },
      {
        "unitid": 118001,
        "name": "Creditta",
        "imagelink": "https://redive.estertion.win/icon/unit/118031.webp",
        "imageid": 118031
      },
      {
        "unitid": 125301,
        "name": "Kokkoro (Ranger)",
        "imagelink": "https://redive.estertion.win/icon/unit/125331.webp",
        "imageid": 125331
      },
      {
        "unitid": 101201,
        "name": "Hatsune",
        "imagelink": "https://redive.estertion.win/icon/unit/101261.webp",
        "imageid": 101261
      },
      {
        "unitid": 105001,
        "name": "Misaki",
        "imagelink": "https://redive.estertion.win/icon/unit/105061.webp",
        "imageid": 105061
      },
      {
        "unitid": 117901,
        "name": "Suzuna (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/117931.webp",
        "imageid": 117931
      },
      {
        "unitid": 119301,
        "name": "Rino (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/119331.webp",
        "imageid": 119331
      },
      {
        "unitid": 111401,
        "name": "Luna",
        "imagelink": "https://redive.estertion.win/icon/unit/111431.webp",
        "imageid": 111431
      },
      {
        "unitid": 180201,
        "name": "Yui (Princess)",
        "imagelink": "https://redive.estertion.win/icon/unit/180231.webp",
        "imageid": 180231
      },
      {
        "unitid": 108401,
        "name": "Chika (Christmas)",
        "imagelink": "https://redive.estertion.win/icon/unit/108431.webp",
        "imageid": 108431
      },
      {
        "unitid": 107701,
        "name": "Suzume (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/107731.webp",
        "imageid": 107731
      },
      {
        "unitid": 107801,
        "name": "Kyaru (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/107861.webp",
        "imageid": 107861
      },
      {
        "unitid": 118101,
        "name": "Ranpha",
        "imagelink": "https://redive.estertion.win/icon/unit/118131.webp",
        "imageid": 118131
      },
      {
        "unitid": 104001,
        "name": "Aoi",
        "imagelink": "https://redive.estertion.win/icon/unit/104061.webp",
        "imageid": 104061
      },
      {
        "unitid": 118501,
        "name": "Karin",
        "imagelink": "https://redive.estertion.win/icon/unit/118531.webp",
        "imageid": 118531
      },
      {
        "unitid": 104201,
        "name": "Chika",
        "imagelink": "https://redive.estertion.win/icon/unit/104261.webp",
        "imageid": 104261
      },
      {
        "unitid": 110601,
        "name": "Maho (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/110631.webp",
        "imageid": 110631
      },
      {
        "unitid": 123101,
        "name": "Maho (Explorer)",
        "imagelink": "https://redive.estertion.win/icon/unit/123131.webp",
        "imageid": 123131
      },
      {
        "unitid": 101001,
        "name": "Maho",
        "imagelink": "https://redive.estertion.win/icon/unit/101061.webp",
        "imageid": 101061
      },
      {
        "unitid": 117601,
        "name": "Yuki (Ooedo)",
        "imagelink": "https://redive.estertion.win/icon/unit/117631.webp",
        "imageid": 117631
      },
      {
        "unitid": 100201,
        "name": "Yui",
        "imagelink": "https://redive.estertion.win/icon/unit/100261.webp",
        "imageid": 100261
      },
      {
        "unitid": 127201,
        "name": "Kyaru (Transfer Student)",
        "imagelink": "https://redive.estertion.win/icon/unit/127231.webp",
        "imageid": 127231
      },
      {
        "unitid": 100801,
        "name": "Yuki",
        "imagelink": "https://redive.estertion.win/icon/unit/100861.webp",
        "imageid": 100861
      },
      {
        "unitid": 111001,
        "name": "Yuni",
        "imagelink": "https://redive.estertion.win/icon/unit/111031.webp",
        "imageid": 111031
      },
      {
        "unitid": 116401,
        "name": "Yuni (Sports Festival)",
        "imagelink": "https://redive.estertion.win/icon/unit/116431.webp",
        "imageid": 116431
      },
      {
        "unitid": 103601,
        "name": "Kyouka",
        "imagelink": "https://redive.estertion.win/icon/unit/103661.webp",
        "imageid": 103661
      },
      {
        "unitid": 122701,
        "name": "Kyouka (Summer)",
        "imagelink": "https://redive.estertion.win/icon/unit/122731.webp",
        "imageid": 122731
      },
      {
        "unitid": 108301,
        "name": "Misaki (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/108331.webp",
        "imageid": 108331
      },
      {
        "unitid": 111101,
        "name": "Kyouka (Halloween)",
        "imagelink": "https://redive.estertion.win/icon/unit/111131.webp",
        "imageid": 111131
      },
      {
        "unitid": 125101,
        "name": "Tamaki (Cafe)",
        "imagelink": "https://redive.estertion.win/icon/unit/125131.webp",
        "imageid": 125131
      }
    ];
    try {

      const units = data;//await Unit.find();
      return units;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch units!");
    }
};


export const fetchMember = async (id) => {
    console.log(id);
    try {
      connectToDB();
      const member = await Member.findOne({id:id});
      return member;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch member!");
    }
  };