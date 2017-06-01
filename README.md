<h3><b>TimeTable Apps</b></h3>
</br>

<p>TimeTable Apps is an application designing for students to record their timetable in moblie phone. The application aims to make students' timetable can be accessed anywhere and anytime. Timetable printed in paper is easily getting damage and lost. By recording it in mobile phone, students can prevent from missing their timetable and late for class. There are two pages in the application, which are 'Add class' and 'List classes'. Changing menu can be perform by clicking 'hamburger' icon at the top left corner. In the 'Add class' page, students just need to input time, day and venue of their classes into the application. All the information just need to insert once and can be used for every week. In the 'List classes' page, all the classes from Monday to Friday will be listed down.</p>

  </br><h2><b>Developers Team Members</b></h2>
  
  </br>

  <table>
  <tr>
  <th>MATRIC NO.</th>
  <th>NAME</th>
  </tr>
  <tr>
  <td>B031410027</td>
  <td>WOON KUNG CHUNG</td>
  </tr>
  <tr>
  <td>B031410136</td>
  <td>TAN LUN CHOK</td>
  </tr>
  <tr>
  <td>B031410134</td>
  <td>TEE PEI YA</td>
  </tr>
  <tr>
  <td>B031510128</td>
  <td>YANG SHWU ENN</td>
  </tr>
  <tr>
  <td>B031410178</td>
  <td>TAN SHIN WEY</td>
  </tr>

  </table>
  
  
  
  </br>
  <h2><b>Functionalities of Apps</b></h2>
  </br>
  <p><b>This apps provided with the functions stated below:</b></p>
  <ul>
 
  <br>
  <li>Insert time, day and venue of classes.</li>
  <li>View and list classes according to the days (Monday to Friday).</li>
  <li>Reset the timetable when new semester started.</li>
  </ul>



  </br>
  <h2><b>How To Setup The Development Environment</b></h2>
  </br>
  
  <p>Before start writing the hybrid application, you need to setup your PC (for Window) :</p>
  
 <p>
 1)	Setup environment variable<br>
-	Right click to My Computer >> Properties >> Advance System Settings >> Environment Variable >> Choose Path and click Edit >> Add :<br>
-	;<your_sdkPath>\android-sdks\tools ;<your_sdkPath>\android-sdks\platform-tools<br>
-	Click OK >> Click Apply<br>
2)	Install Node.js<br>
-	Download the Node.js at https://nodejs.org/en/<br>
-	Run the node-v*.*.*.msi installer<br>
-	After installation finish, run command prompt (run as administrator) <br>
-	Run:  node –v. By right you should be getting the version of the Node.js <br>
3)	Install Cordova<br>
-	After successful Node installation, run:  npm install –g cordova<br>
-	Create a Cordova project folder by running: <br>
-	cordova create your_project_name<br>
-	cd your_project_name<br>
-	cordova platform add android<br>
4)	Install Ionic Framework<br>
-	npm install -g cordova ionic<br>
-	Mean while waiting for ionic installation to finish, sign up Ionic account at: https://creator.ionic.io/app/login<br>
5) Start an ionic project<br>
- Open up command prompt and navigate to the previous Cordova folder<br>
- Run: ionic start "projectName"<br>
- Run: cd "projectName"<br>
6) Add android platform into ionic project<br>
- Run: cordova platform add android<br>
- Run: cordova run android to build the application<br>
7) Add the logical process of SQLite<br>
- Run: npm install –g bower<br>
- Run: bower install ngCordova<br><br>
- Run: cordova plugin add cordova-sqlite-storage<br>
Now open the index.html and add the ng-cordova.min.js<br><br>


<-- cordova script (this will be a 404 during development) --><br>
    <script src="lib/ngCordova/dist/ng-cordova.min.js"></script><br>
    <script src="cordova.js"></script><br><br>

<b>You can start to build ionic project!!!</b><br>

 </p>
