class Carte {
    constructor(titlu,autor, editura,an,pret) {
        this.titlu = titlu;
        this.autor = autor;
        this.editura = editura;
        this.an = an;
        this.pret =pret;
    }
    get pret(){
        console.log('sunt in getter');
        return this.pret;
    }
    set pret(pretNou){
        console.log('sunt in setter');
        this.pret=pretNou;
    }
    info(){
        console.log(`Titlul este ${this.titlu},autor ${this.autor}`);
    }
    deschidCartea(){
        console.log('Am deschis cartea la pagina 15');
    }
    randomIntFromInterval(min, max) { // min and max included 
       return Math.floor(Math.random() * (max - min + 1) + min)
    }
    pretNou(){
        this.pret=this.pret-(Carte.reducere*this.pret)/100
    }
    modificaPret(diferenta){
        this.pret=this.pret-diferenta;
    }

}

// Curs 2 Module
// export { Carte }
