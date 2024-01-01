const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
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
    lastscore: {
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
    lastupdate: {
        type: Date,
        default: new Date()
    },
    rosterstring: {
        type: String,
        default: ''
    },
    sync: {
        type: Number,
        default: 0
    },
    killer: {
        type: Number,
        default: 0
    },
    urlroster: {
        type: String,
        default: ''
    },
    avatar:{
        type: String,
    },
    password:{
        type: String,
    }

});

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
});

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

let cbstatSchema = new Schema({
    id: {
        type: String,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    damage: [{
        month: Number,
        damage: Number
    }]

});
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Member = mongoose.models.members || mongoose.model("members", memberSchema);
export const Hitplan = mongoose.models.hitplans || mongoose.model("hitplans", hitplanSchema);
export const CbStats = mongoose.models.cbstats || mongoose.model("cbstats", cbstatSchema);
export const Unit = mongoose.models.units || mongoose.model("units", unitSchema);