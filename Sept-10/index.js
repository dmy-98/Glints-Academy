//import Army, Barrack
const Army = require('./army')
const Barrack = require('./barrack');

//Inheritances
const { Knight, Spearman, Archer } = Army;

//Make Instances of Army
const knightSatu = new Knight("Knight Satu", 3);
const knightDua = new Knight("Knight Dua", 2);
const spearmanSatu = new Spearman("Spearman Satu", 4);
const spearmanDua = new Spearman("Spearman Dua", 1);
const archerSatu = new Archer("Archer Satu", 2);
const archerDua = new Archer("Archer Dua", 5);

//Make instances of factory class 
const barrackSatu = new Barrack();

//Methods
barrackSatu.recruit(knightSatu);
barrackSatu.recruit(knightDua);
barrackSatu.recruit(spearmanSatu);
barrackSatu.recruit(spearmanDua);
barrackSatu.recruit(archerSatu);
barrackSatu.recruit(archerDua);

barrackSatu.summon();
knightSatu.training();
archerSatu.talk();
barrackSatu.disband("Knight Dua");
barrackSatu.summon();
barrackSatu.group();