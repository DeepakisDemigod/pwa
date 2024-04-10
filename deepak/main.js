import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div >
  <header>
  <h1>App fhfghfName</h1>
  <div class="toggle">
    <span class="light">Light</span>
    <span class="dark">Dark</span>
  </div>
  </header>
  <main>
  <section class="insights">
    <h2>Insights</h2>
    <div class="graph"></div>
  </section>
  <section class="upcoming-subscriptions">
    <h2>Upcoming Subscriptions</h2>
    <table>
      <thead>
        <tr>
          <th>Subscription</th>
          <th>Days Remain</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Subscription 1</td>
          <td>3</td>
          <td>$24.95</td>
        </tr>
        <tr>
          <td>Subscription 2</td>
          <td>8</td>
          <td>$65.10</td>
        </tr>
        <tr>
          <td>Subscription 3</td>
          <td>9</td>
          <td>$19.00</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="all-expenses">
    <h2>All Expenses</h2>
    <table>
      <thead>
        <tr>
          <th>Expense Name</th>
          <th>Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Recurring Expense</td>
          <td>$99.00</td>
          <td>Details ></td>
        </tr>
        <tr>
          <td>Category</td>
          <td>$40.00</td>
          <td>Details ></td>
        </tr>
        <tr>
          <td>Expense Name</td>
          <td>$99.00</td>
          <td>Details ></td>
        </tr>
        <tr>
          <td>Category</td>
          <td>$</td>
          <td>Details ></td>
        </tr>
      </tbody>
    </table>
  </section>
  </main>
  <nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Search</a></li>
    <li><a href="#">Add New</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
  </nav>
  </div>
`;

setupCounter(document.querySelector('#counter'));
