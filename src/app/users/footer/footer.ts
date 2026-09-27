import { Component } from '@angular/core';
import { AdminModuleRoutingModule } from "../../admin-module/admin-module-routing-module";

@Component({
  selector: 'app-footer',
  imports: [AdminModuleRoutingModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
