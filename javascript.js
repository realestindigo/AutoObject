var mijnauto = {
  merk: "Ford",
  kleur: "blauw",
  snelheid: 0,

    gasgeven: function() {
    this.snelheid += 5
    console.log(this.snelheid);
  },

    toeteren: function() {
    console.log("toet!")
  }
}

console.log(mijnauto.kleur);
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();

