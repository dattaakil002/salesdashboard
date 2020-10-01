import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  salesrep : string,
  date : string,
  client : string,
  cntperson : string,
  title : string,
  vertical : string,
  location : string,
  interaction : string,
  outcomeandremark : string,
  status : string,

}

const ELEMENT_DATA: PeriodicElement[] = [
  {salesrep: 'John Doe', date: 'July 20th, 2018', client: 'Oberio Group of Hotels', cntperson: 'Mahmud Riteli', title: 'C level', 
  vertical: 'Marketing', location: 'Goto Meeting', interaction: 'Understand their current ecosystem', 
  outcomeandremark: 'Send first cut of proposed solution', status: 'Needs defined'},

  {salesrep: 'Ethan Hunt', date: 'July 20th, 2018', client: 'Taj Group of Hotels', cntperson: 'Avie Peasegood', title: 'C level', 
  vertical: 'Sales', location: 'Video', interaction: 'Demo the product', 
  outcomeandremark: 'She will get back with availability for next meeting', status: 'Contact made'},

  {salesrep: 'Jane Doe', date: 'July 20th, 2018', client: 'Accenture', cntperson: 'Dew Tilbey', title: 'C level', 
  vertical: 'Senior Management', location: 'Face to Face', interaction: 'Negotiations', 
  outcomeandremark: 'He need to get final approval by the board. Will happen by today EOD', status: 'Negotiations started'},

  {salesrep: 'Julia Cruise', date: 'July 20th, 2018', client: 'Google', cntperson: 'Jerri Casswell', title: 'Sr Manager Level', 
  vertical: 'Technology', location: 'Call', interaction: 'Introductory call', 
  outcomeandremark: 'Need to send them a reminder tomorrow to fix meeting with the Sales Head', status: 'Contact made'},

  {salesrep: 'Tom Roberts', date: 'July 20th, 2018', client: 'Microsoft', cntperson: 'Dannye Halms', title: 'VP level', 
  vertical: 'Senior Management', location: 'Email', interaction: 'Confirm final meeting with CEO for pricing negotiation', 
  outcomeandremark: 'Meeting confirmed for tomorrow', status: 'Negotiations started'},

  {salesrep: 'John Doe', date: 'July 21th, 2018', client: 'Oberio Group of Hotels', cntperson: 'Mahmud Riteli', title: 'C level', 
  vertical: 'Marketing', location: 'Goto Meeting', interaction: 'Propose our solution', 
  outcomeandremark: 'Send them an updated proposal based on their feedback by next week.', status: 'Needs defined'},

  {salesrep: 'Ethan Hunt', date: 'July 21th, 2018', client: 'Taj Group of Hotels', cntperson: 'Avie Peasegood', title: 'C level', 
  vertical: 'Sales', location: 'Video', interaction: 'Fix up next meeting', 
  outcomeandremark: 'She has to fly out of country urgently. Will get back with availability once back.', status: 'Contact made'},

  {salesrep: 'Jane Doe', date: 'July 21th, 2018', client: 'Accenture', cntperson: 'Dew Tilbey', title: 'C level', 
  vertical: 'Senior Management', location: 'Face to Face', interaction: 'Deal signing', 
  outcomeandremark: 'Deal closed', status: 'Won'},

  {salesrep: 'Julia Cruise', date: 'July 21th, 2018', client: 'Google', cntperson: 'Jerri Casswell', title: 'Sr Manager Level', 
  vertical: 'Technology', location: 'Call', interaction: 'Fix up next meeting with Sales Head', 
  outcomeandremark: 'Scheduled for next week', status: 'Contact made'},

  {salesrep: 'Tom Roberts', date: 'July 21th, 2018', client: 'Microsoft', cntperson: 'Dannye Halms', title: 'VP level', 
  vertical: 'Senior Management', location: 'Email', interaction: 'Finalize negotiation', 
  outcomeandremark: 'Deal lost', status: 'Lost'},

 
  
];


@Component({
  selector: 'app-salesdashboard',
  templateUrl: './salesdashboard.component.html',
  styleUrls: ['./salesdashboard.component.scss']
})
export class SalesdashboardComponent implements OnInit {

  displayedColumns: string[] = ['salesrep', 'date', 'client', 
  'cntperson', 'title', 'vertical', 'location', 'interaction', 'outcomeandremark', 'status'];
  dataSource1 = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
