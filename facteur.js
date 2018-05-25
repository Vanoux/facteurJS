function Courrier(adresse, contenu){
  this.adresse = adresse;
  this.contenu = contenu;
}

var sacoche = [];
var courrier1 = new Courrier ("Route du Trimard", "factures");
var courrier2 = new Courrier ("Avenue des doux réveurs", "impôt");
var courrier3 = new Courrier ("Impasse du javascript", "recommandé");
var courrier4 = new Courrier ("Route du Trimard", "Lettre de maman");
var courrier5 = new Courrier ("Avenue des doux réveurs", "pubs");
var courrier6 = new Courrier ("Chemin des espoirs", "factures");
var courrier7 = new Courrier ("Route du Trimard", "pubs");
var courrier8 = new Courrier ("Chemin des espoirs", "pubs");

sacoche.push(courrier1);
sacoche.push(courrier2);
sacoche.push(courrier3);
sacoche.push(courrier4);
sacoche.push(courrier5);
sacoche.push(courrier6);
sacoche.push(courrier7);
sacoche.push(courrier8);
//console.log(sacoche);


function Habitation(adresse){
  this.adresse = adresse;
  this.bal = {
    courriers : [],
    deposerCourrier: function(courrier){
      this.courriers.push(courrier)
    },
    retirerCourrier: function(){
      this.courriers.splice(0);
    }
}
}

var maison1 = new Habitation('Route du Trimard');
var maison2 = new Habitation('Avenue des doux réveurs');
var maison3 = new Habitation('Impasse du javascript');
var maison4 = new Habitation('Chemin des espoirs');
//console.log(maison1);
//console.log(sacoche[0].contenu , maison1.adresse);

for (i=0; i<=sacoche.length-1; i++) {
//console.log(sacoche[i]);
  
  if(sacoche[i].adresse == maison1.adresse) {
    //console.log(sacoche[i]);
    maison1.bal.deposerCourrier(sacoche[i]);
    delete sacoche[i];
  } else if(sacoche[i].adresse == maison2.adresse){
    maison2.bal.deposerCourrier(sacoche[i]);
    delete sacoche[i];
  } else if (sacoche[i].adresse == maison3.adresse){
    maison3.bal.deposerCourrier(sacoche[i]);
    delete sacoche[i];
  } else if (sacoche[i].adresse == maison4.adresse){
    maison4.bal.deposerCourrier(sacoche[i]);
    delete sacoche[i];
  }
}

console.log(maison1.bal.courriers);
console.log(maison2.bal.courriers);
console.log(maison3.bal.courriers);
console.log(maison4.bal.courriers);
console.log(sacoche);








/*
maison0 = new Habitation('route des développeurs');
maison1= new Habitation ('impasse du javascript');
var courrier = ['route des développeurs', 'impasse du javascript'];
console.log(courrier[0]);


maison0.bal.deposerCourrier(courrier[O], 'impot');
maison1.bal.deposerCourrier ('facture');
maison1.bal.deposerCourrier ('pubs');


bal.retirerCourrier();
console.log(bal.courriers);

console.log(maison0);
console.log(maison1);

maison2.bal.retirerCourrier();
console.log(maison2);
*/