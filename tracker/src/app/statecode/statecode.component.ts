import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-statecode",
  templateUrl: "./statecode.component.html",
  styleUrls: ["./statecode.component.css"],
})
export class StatecodeComponent implements OnInit {
  statecode: { id: string };
  
  coronaList = [];
  
  constructor(public router: ActivatedRoute, private _auth: AuthService) {}

  ngOnInit(): void {
      this.statecode = {
        id: this.router.snapshot.params["id"],
      };
    
    this._auth.getcoviddata().subscribe((data) => {
      this.coronaList = data;
      console.log(data);
    });
  }
}