import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HomePage } from '../home/home';
import { EditPage } from '../edit/edit';
@Component({
  selector: 'page-show',
  templateUrl: 'show.html'
})
export class ShowPage {

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

    constructor(public navCtrl: NavController, private sqlite: SQLite, private navParams : NavParams) {
        this.name=navParams.get('name');
        this.color=navParams.get('color');
        this.max_speed=navParams.get('max_speed');
        this.horsepower=navParams.get('horsepower');
        this.weight=navParams.get('weight');
        this.length=navParams.get('length');
        this.option=navParams.get('option');
        this.price=navParams.get('price');
        this.idCars=navParams.get('idCars');
        console.log(this.name);
        //this.showone(this.idCars);
    }

    public showone(idCars){
        this.cars = [];
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
        });
    }

  public home(){
    this.navCtrl.push(HomePage);
  }
  public edit(){
    this.navCtrl.push(EditPage);
  }

}
