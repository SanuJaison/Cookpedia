import { Component } from '@angular/core';
import { AdminModuleRoutingModule } from "../../admin-module/admin-module-routing-module";

@Component({
  selector: 'app-header',
  imports: [AdminModuleRoutingModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
