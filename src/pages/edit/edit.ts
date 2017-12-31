import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HomePage } from '../home/home';
const DATABASE_FILE_NAME: string = 'data.db';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

  idCars : number;
  name : string;
  color : string;
  max_speed : number;
  horsepower : number;
  price : number;
  weight : number;
  length : number;
  option : string
  cars = [];

  private db:SQLiteObject;

  constructor(public navCtrl: NavController, private sqlite: SQLite) {
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
      console.log('tablestest créée !');
      this.db.executeSql('CREATE TABLE IF NOT EXISTS `Cars` ( `idCars` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL, `color` TEXT NOT NULL, `length` INTEGER NOT NULL DEFAULT 4500, `weight` INTEGER NOT NULL DEFAULT 2000, `max_speed` INTEGER NOT NULL DEFAULT 300, `horsepower` INTEGER NOT NULL DEFAULT 400, `price` INTEGER NOT NULL DEFAULT 400000, `optionID` INTEGER, FOREIGN KEY(`optionID`) REFERENCES `option`(`idoption`) )', {})
      .then(() => {
          console.log('Table Cars created !');
          this.db.executeSql('CREATE TABLE IF NOT EXIST  `option` ( `idoption` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT )', {})
          .then(() => console.log('Table option created !'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

  public addCars(){
    console.log('FRED IL CASSE LES COUILLES');
    this.db.executeSql('INSERT INTO `Cars` (`name`,`color`,`price`,`weight`,`length`,`max_speed`,`horsepower`) VALUES ("' + this.name +'","' + this.color +'","' + this.price +'","' + this.weight +'","' + this.length +'","' + this.max_speed +'","' + this.horsepower +'")',{})
    .then(() => {
      console.log('Fred ne casse plus les couilles');
    })
    .catch(e => console.log(e));
  }

  public home(){
    this.navCtrl.push(HomePage);
  }

}
