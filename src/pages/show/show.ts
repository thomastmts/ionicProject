import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HomePage } from '../home/home';
import { EditPage } from '../edit/edit';
const DATABASE_FILE_NAME: string = 'data.db';

@Component({
  selector: 'page-show',
  templateUrl: 'show.html'
})
export class ShowPage {

    public idCars : number;
    public name : string;
    public color : string;
    public max_speed : number;
    public horsepower : number;
    public price : number;
    public weight : number;
    public length : number;
    public option : string;
    cars:any = [];
  
    private db:SQLiteObject;

    constructor(public navCtrl: NavController, private sqlite: SQLite, private navParams : NavParams) {
       /* this.name=navParams.get('name');
        this.color=navParams.get('color');
        this.max_speed=navParams.get('max_speed');
        this.horsepower=navParams.get('horsepower');
        this.weight=navParams.get('weight');
        this.length=navParams.get('length');
        this.option=navParams.get('option');
        this.price=navParams.get('price');*/
        console.log('haha');
        this.idCars=navParams.get('idCars');
        this.createDatabaseFile();
        console.log(this.idCars);
        this.showone(this.idCars);
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
        console.log('rholalaaa');
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `Cars` ( `idCars` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL, `color` TEXT NOT NULL, `length` INTEGER NOT NULL DEFAULT 4500, `weight` INTEGER NOT NULL DEFAULT 2000, `max_speed` INTEGER NOT NULL DEFAULT 300, `horsepower` INTEGER NOT NULL DEFAULT 400, `price` INTEGER NOT NULL DEFAULT 400000, `optionID` INTEGER, FOREIGN KEY(`optionID`) REFERENCES `option`(`idoption`) )', {})
        .then(() => {

            console.log('Table Cars created !');
            this.db.executeSql('CREATE TABLE IF NOT EXISTS  `option` ( `idoption` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT )', {})
            .then(() => console.log('Table option created !'))
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
    }
    public showone(idCars){
        console.log('berkan');
        this.cars = [];
        if(this.db == null){
            console.log('sepho');
        }
        this.db.executeSql('SELECT * FROM `Cars` WHERE idCars=?',[idCars])
        .then((data) => {
            
            if(data == null){
                console.log('show1');
                return;
            }
            if(data.rows){
                console.log('show2');
                if(data.rows.length > 0){
                    for(var i=0;i<data.rows.length;i++){
                        this.cars.push({idCars:data.rows.item(i).idCars});
                    }
                }
            }
        })
        .catch(e => console.log(e));
        console.log('richie');
    }

  public home(){
    this.navCtrl.push(HomePage);
  }
  public edit(){
    this.navCtrl.push(EditPage);
  }

}
