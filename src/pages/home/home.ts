import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ShowPage } from '../show/show';
import { EditPage } from '../edit/edit';
import { ContactPage } from '../contact/contact';

const DATABASE_FILE_NAME: string = 'data.db';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    id : number; 
    idCars : number; 
    name : string;
    color : string;
    max_speed : number;
    horsepower : number;
    price : number;
    weight : number;
    length : number;
    option : string;
    cars = [];
  
    private db:SQLiteObject;

    constructor(public navCtrl: NavController, private sqlite: SQLite, public navParams : NavParams) {
        this.idCars = navParams.get('idCars')
        this.createDatabaseFile();
    }

    private createDatabaseFile(): void {
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                console.log('Bdd créée !');
                this.db=db;
                this.createTables();
            })
            .catch(e => console.log(e));
    }

    private createTables(): void{
        this.db.executeSql('CREATE TABLE IF NOT EXIST `Cars` ( `idCars` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL, `color` TEXT NOT NULL, `length` INTEGER NOT NULL DEFAULT 4500, `weight` INTEGER NOT NULL DEFAULT 2000, `max_speed` INTEGER NOT NULL DEFAULT 300, `horsepower` INTEGER NOT NULL DEFAULT 400, `price` INTEGER NOT NULL DEFAULT 400000, `optionID` INTEGER, FOREIGN KEY(`optionID`) REFERENCES `option`(`idoption`) )', {})
        .then(() => {

            console.log('Table Cars created !');
            this.db.executeSql('CREATE TABLE IF NOT EXIST  `option` ( `idoption` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT )', {})
            .then(() => console.log('Table option created !'))
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
    }

    public showall(){
        console.log('showall');
        this.cars = [];
        this.db.executeSql('SELECT * FROM `Cars`',{})
        .then((data) => {
            
            if(data == null){
                console.log('showall2');
                return;
            }
            if(data.rows){
                console.log('showall3');
                if(data.rows.length > 0){
                    for(var i=0;i<data.rows.length;i++){
                        this.cars.push({idCars:data.rows.item(i).idCars});
                    }
                }
            }
        });
    }

    public delete(idCars) {
        console.log('supsup');
        this.db.executeSql('DELETE FROM `Cars` WHERE idCars=?',[idCars])
        .then(res => {
          console.log('La voiture à bien été supprimé');
          this.showall();
        })
        .catch(e => console.log(e));
    }

    /*public edit(name,color,price,weight,length,max_speed,horsepower,idCars) {
        console.log('editedit');
        //this.db.executeSql('UPDATE `Cars` SET name=? , SET color=? , SET price =? , SET weight=? , SET length=? , SET max_speed=? , SET horsepower=? WHERE idCars=?',[name,color,price,weight,length,max_speed,horsepower,idCars])
        
        this.db.executeSql('SELECT * FROM `Cars` WHERE idCars=?',[idCars])
        .then(res => {
          console.log('edddd');
        })
        .catch(e => console.log(e));
        this.navCtrl.setRoot('edit.html',{opt:{dismiss:false}})
    }

    public show(idCars) {
        console.log('oneone');
        this.navCtrl.push(page-edit);
        this.db.executeSql('SELECT * FROM `Cars` WHERE idCars=?',[idCars])
        .then(res => {
          console.log('show');
        })
        .catch(e => console.log(e));
    }*/

    public edit(idCars:number){
        console.log('thomas');
        this.navCtrl.push(EditPage,{
            idCars:idCars
        });
    }

    public show(idCars:number){
        console.log("tozzz");
        this.navCtrl.push(ShowPage,{
            idCars:idCars
        });
    }

    public show2(){
        this.navCtrl.push(ShowPage)
    }

    public contact(){
        this.navCtrl.push(ContactPage);
    }







        /*
        this.db.executeSql('SELECT * FROM `Cars` WHERE idCars=?',[idCars])
        .then((data) => {
            console.log(data.rows.item().name);
                        this.navCtrl.push(ShowPage,{
                            idCars:data.idCars,
                            name: data.name,
                            price: data.price,
                            color: data.color,
                            length: data.length,
                            weight: data.weight,
                            max_speed: data.max_speed,
                            option: data.option,
                            horsepower: data.horsepower
                        });
                    
        });*/


/*
        this.navCtrl.push(ShowPage,{
            id: this.id,
            name: this.name,
            price: this.price,
            color: this.color,
            length: this.length,
            weight: this.weight,
            max_speed: this.max_speed,
            option: this.option,
            horsepower: this.horsepower
        });*/
      
    
}