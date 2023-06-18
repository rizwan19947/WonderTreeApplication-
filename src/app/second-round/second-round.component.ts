import { Component, OnInit } from '@angular/core';

export interface Facilitators {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  assignedStudents: string[];
}

@Component({
  selector: 'app-second-round',
  templateUrl: './second-round.component.html',
  styleUrls: ['./second-round.component.scss']
})
export class SecondRoundComponent implements OnInit {

  /**
   * As a best practice, passwords should be managed by a third party login service integrated through an Angular Service,
   * but that has already been proven in the first round of the assessment.
   */
  facilitators: Facilitators[] = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      password: "password123",
      assignedStudents: ["Ray Charles", "Saad Rana"]
    },

    {
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      password: "pass123",
      assignedStudents: ["John Smith", "Mary Johnson"]
    },

    {
      firstName: "Ahmed",
      lastName: "Ali",
      email: "ahmedali@example.com",
      password: "securepass",
      assignedStudents: ["Ahmed Khan", "Mohammad Ali"]
    },

    {
      firstName: "Maria",
      lastName: "Garcia",
      email: "mariagarcia@example.com",
      password: "strongpassword",
      assignedStudents: ["Fatima Khalil", "Omar Saad"]
    },

    {
      firstName: "Mohammed",
      lastName: "Khan",
      email: "mohammedkhan@example.com",
      password: "mypassword",
      assignedStudents: ["Emily Martinez", "Sarah Wilson"]
    }
  ];

  /**
   * Considering players an array of name strings for now
   * (since no data structure is needed for current requirements)
   */
  players: string[] = ["Ray Charles", "Saad Rana", "John Smith", "Mary Johnson", "Ahmed Khan", "Mohammad Ali", "Fatima Khalil", "Omar Saad", "Emily Martinez", "Sarah Wilson"];

  isDropdownOpen = false;
  selectedPlayer: string = '';

  constructor() {
  }

  selectPlayer(playerName: string) {
    this.selectedPlayer = playerName;
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngOnInit(): void {
  }

}

