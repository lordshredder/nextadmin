const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');
const {syncDiscordUnit} = require('@/app/lib/data');

let userSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );

  let memberSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    member: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        default: 0
    },
    bestscore: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'active'
    },
    rosterstring: {
        type: String,
        default: ''
    },
    urlroster: {
        type: String,
        default: ''
    },
    avatar:{
        type: String,
        default: ''
    },
    notes:{
        type: String,
        default: ''
    },
    clan:{
        type: String,
        default: 'Pecoriinu'  
    }
},
{ timestamps: true });



let unitSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    imagelink: {
        type: String,
        required: true,
    }, 
    element: {
        type: String,
    }, 
    range: {
        type: Number,
        default: 999
    }, 
    stars: {
        type: Number,
        default: 5,
        min: 1,
        max: 6
    }
  });

unitSchema.post('save', async function(doc) {
    await updateDiscordBotWithNewUnit(doc);
});

async function updateDiscordBotWithNewUnit(doc){
    await syncDiscordUnit();
}

let hitplanSchema = new Schema({
    id: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    boss1: {      
        name: String,
        dmg: {
            type: String,
            uppercase: true,
        },
        team: [{
            id: Number,
            stars: Number,
            support: Boolean
        }]
    },
    boss2: {      
        name: String,
        dmg: {
            type: String,
            uppercase: true,
        },
        team: [{
            id: Number,
            stars: Number,
            support: Boolean
        }]
    },
    boss3: {      
        name: String,
        dmg: {
            type: String,
            uppercase: true,
        },
        team: [{
            id: Number,
            stars: Number,
            support: Boolean
        }]
    },

}, {timestamps: true});


let statSchema = new Schema({
    cbdate: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    clan:{
        type: String,
        default: "Pecoriinu"
    },
    pilot:{
        type: Boolean,
        default: false
    },
    memberobj:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "members"
    },
    stats: {
        kills: {
            type: Number,
            default: 0
        },
        syncs: {
            type: Number,
            default: 0
        },
        timelines: {
            type: Number,
            default: 0
        },
        damage: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        }
    }

});
statSchema.index({ cbdate: 1, id: 1 }, { unique: true });

statSchema.statics.sortByDamage = async function(cbDate, clan, includeMemberValues = false) {
    if(includeMemberValues) return await this.find({cbdate: cbDate}).populate('memberobj').where("pilot").equals(false).where("clan").equals(clan).sort({'stats.damage': -1});
    return await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.damage': -1});
}

statSchema.statics.sortByKills = async function(cbDate, clan, includeMemberValues = false) {
    if(includeMemberValues) return await this.find({cbdate: cbDate}).populate('memberobj').where("pilot").equals(false).where("clan").equals(clan).sort({'stats.kills': -1, 'stats.damage': -1});
    return await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.kills': -1, 'stats.damage': -1});
}

statSchema.statics.sortBySyncs = async function(cbDate, clan, includeMemberValues = false) {
    if(includeMemberValues) return await this.find({cbdate: cbDate}).populate('memberobj').where("pilot").equals(false).where("clan").equals(clan).sort({'stats.syncs': -1, 'stats.damage': -1});
    return await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.syncs': -1, 'stats.damage': -1});
}

statSchema.statics.sortByTimelines = async function(cbDate, clan, includeMemberValues = false) {
    if(includeMemberValues) return await this.find({cbdate: cbDate}).populate('memberobj').where("pilot").equals(false).where("clan").equals(clan).sort({'stats.timelines': -1, 'stats.damage': -1});
    return await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.timelines': -1, 'stats.damage': -1});
}

statSchema.statics.sortByTotal = async function(cbDate, clan, includeMemberValues = false) {
    if(includeMemberValues) return await this.find({cbdate: cbDate}).populate('memberobj').where("pilot").equals(false).where("clan").equals(clan).sort({'stats.total': -1, 'stats.damage': -1});
    return await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.total': -1, 'stats.damage': -1});
}

statSchema.statics.getPlacement = async function(cbDate, clan, id) {
    const docs = await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.damage': -1}).exec();
    const index = docs.map(doc => doc.id).indexOf(id) + 1;
    if(!docs[index] || docs[index].stats.damage === 0) return -1;
    return docs.map(doc => doc.id).indexOf(id) + 1;
}

statSchema.statics.getPlacementKills = async function(cbDate, clan, id) {
    const docs = await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.kills': -1, 'stats.damage': -1}).exec();
    const index = docs.map(doc => doc.id).indexOf(id) + 1;
    if(!docs[index] || docs[index].stats.damage === 0) return -1;
    return docs.map(doc => doc.id).indexOf(id) + 1;
}

statSchema.statics.getPlacementSyncs = async function(cbDate, clan, id) {
    const docs = await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.syncs': -1, 'stats.damage': -1}).exec();
    const index = docs.map(doc => doc.id).indexOf(id) + 1;
    if(!docs[index] || docs[index].stats.damage === 0) return -1;
    return docs.map(doc => doc.id).indexOf(id) + 1;
}

statSchema.statics.getPlacementTimelines = async function(cbDate, clan, id) {
    const docs = await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.timelines': -1, 'stats.damage': -1}).exec();
    const index = docs.map(doc => doc.id).indexOf(id) + 1;
    if(!docs[index] || docs[index].stats.damage === 0) return -1;
    return docs.map(doc => doc.id).indexOf(id) + 1;
}

statSchema.statics.getPlacementTotal = async function(cbDate, clan, id) {
    const docs = await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.total': -1, 'stats.damage': -1}).exec();
    const index = docs.map(doc => doc.id).indexOf(id) + 1;
    if(!docs[index] || docs[index].stats.damage === 0) return -1;
    return docs.map(doc => doc.id).indexOf(id) + 1;
}

statSchema.statics.getHighestDamage = async function(id) {
    const docs = await this.find({id: id}).where("pilot").equals(false).sort({'stats.damage': -1}).limit(1).exec();
    let maxDmg = docs[0]?.stats?.damage;
    return maxDmg ? maxDmg : 0;
}

statSchema.statics.sortByTotalScore = async function(cbDate, clan) {
    return await this.find({cbdate: cbDate}).where("pilot").equals(false).where("clan").equals(clan).sort({'stats.total': -1});
}

statSchema.virtual('totalScore').get(function() {
    const syncMultiplier = 0.05;
    const killMultiplier = 0.025;
    const tlMultiplier = 0.015;
    let totalScore = this.stats.damage;

    let syncBonus = this.stats.syncs * syncMultiplier;
    let killBonus = this.stats.kills * killMultiplier;
    let tlBonus = this.stats.timelines * tlMultiplier;
    let totalBonus = 1+syncBonus+killBonus+tlBonus;
    totalScore = totalBonus * totalScore;
    return parseInt(totalScore);
});

statSchema.statics.getLastDamage = async function(id) {
    const docs = await this.find({id: id}).sort({'cbdate': -1}).exec();
    let lastDamage = docs[0]?.stats?.damage;
    return lastDamage ? lastDamage : 0;
};

statSchema.pre('save', function(next){

    const syncMultiplier = 0.05;
    const killMultiplier = 0.025;
    const tlMultiplier = 0.015;
    let totalScore = this.stats.damage;

    let syncBonus = this.stats.syncs * syncMultiplier;
    let killBonus = this.stats.kills * killMultiplier;
    let tlBonus = this.stats.timelines * tlMultiplier;
    let totalBonus = 1+syncBonus+killBonus+tlBonus;
    totalScore = totalBonus * totalScore;
    this.stats.total = parseInt(totalScore);
    next();
});
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Member = mongoose.models.members || mongoose.model("members", memberSchema);
export const Hitplan = mongoose.models.hitplans || mongoose.model("hitplans", hitplanSchema);
export const Stats = mongoose.models.Stats || mongoose.model("Stats", statSchema);
export const Unit = mongoose.models.units || mongoose.model("units", unitSchema);