<h1>Material Data Code Challenge</h2>

<p>This is a web application that displays a table of data associated with various flooring materials. New materials can be added, existing materials can be edited,
  and any material can be deleted. The frontend uses HTML, CSS (Bootstrap), and Typescript (Angular14) to render components on the DOM. The data is stored in an Azure SQL database.
  An ASP.NET Web Api using C# is running on the backend to handle get, post, put, and delete methods. </p>
  
<p>The final project has been deployed entirely to the cloud via Azure (frontend AppService, backend AppService, Azure SQL) and can be found at the following URL: </p>
<p>https://iecodechallenge.azurewebsites.net/#/material</p>

<p>To run the code entirely locally will require a lot of setup, but I will include instructions. 
If you want to use a database other than the one I currently have deployed, You will need to install MS SQL Server Management Studio
and populate the database accordingly. Assuming its easier to use my Azure SQL DB, the connection string and credentials are already
in the Web.config file of the .NET Web Api solution</p>

<p>Additionally, the entire API is also deployed to Azure, and can be accessed with:</p>
<p>https://webappietest20221110190335.azurewebsites.net/api + /{materialData}/{id}</p>
<p>If you'd like to use Postman to test this api, here is a sample POST request:</p>
<p>
  {
    "Mfr":"Lorem",
    "TypeName":"Ipsum",
    "TypeId":4,
    "StyleName":"Lorem",
    "StyleId":"d7f7s",
    "ColorValue":71398,
    "ColorName":"Ipsum",
    "Size":"Lorem x Ipsum"
   }
 </p>
  <p>https://codebeautify.org/jsonviewer</p>
<h3>Step 1</h3>
<p>Install Visual Studio Code latest version</p>
<p>Once installed, you will need to install the following workloads: </p>
<ul>
  <li>ASP.NET and web development</li>
  <li>.NET desktop development</li>
  <li>.NET Core cross-platform development
</ul>
<h3>Step 2</h3>
<p>Install the latest version of VS Code (will need for Angular, I ran into issues when I didn't open directory with ". code"</p>
<h3>Step 3</h3>
<p>Install latest version of Node.js, use "node --version" on cmd line to ensure it was installed</p>
<h3>Step 4</h3>
<p>Install Angular by opening Node.js command prompt and entering "npm install -g @angular/cli"</p>
<p>Verify version with "ng --ver"</p>
<h3>Step 5</h3>
<p>Open Visual Studio, navigate to Tools > NuGet Package Manager > Package Manager Console</p>
<p>In the powershell terminal that opens at the bottom, execute "Install-Package Microsoft.AspNet.WebApi.Cors"</p>
<h3>Step 6</h3>
<p>Run "ng serve --open" in the angular project director to open the angular code in your web browser</p>

<h1>Overview and Reflection</h1>

<p>I chose to implement this project with the MVC (Model View Controller) backend because it helps keep the API and the frontend code seperated and compartmentalized.
  Once I had the backend done and each method was tested with Postman, I was free to work however I wanted on the frontend without having to worry about anything interfering with the backend. 
  I chose to use Angular on the frontend because of its component nature. I find it easy to understand the tree-like structure of parent and child components 
  and I figured it would be a good way to implement a straightforward HTML table with a modal pop-up for add/edit forms.</p>
  <p> As far as deployment goes, I chose Azure because it was the obvious answer given how closely I developed this project in the Microsoft ecosystem. Azure deployment 
  options are built right into both Visual Studio and VS Code, and I had no problem remotely connecting to the Azure SQL DB with MS SQL Server Management Studio.</p>

<p>In regards to verifying correctness and ensuring the application is running as it should be, I started by testing each of the API methods
  in Postman. To make sure that no problematic data was being written into the database, I added try, catch blocks in the POST, PUT, and DELETE
  methods in the materialData controller. This made testing with Postman less of a headache, because I simply returned strings that said either
  "_____ successful!" or "_____ failed!". Outputting the SqlException Object's message made debugging simple.</p>
  <p>On the frontend side, the biggest concern was handling NULL entries in the DB. To deal with NULL entries, I wrote a utility function that detects NULL 
  entries and sets them equal to an empty string. I discovered that the NULL values were problematic when my filtering function was throwing errors.</p>
  
  <p>If I was able to spend more time one this project, I would have loved to add a simple authentication flow, and possibly a system to indicate who 
  added or altered specific rows. A more ambitious vision of this addition would be a profile page that shows all materials a specific user has ever 
  added to the system. Another feature I was hoping to add would be a more robust version of filtering. Ideally, I would've liked to have 
  a dropdown menu that shows every column, and an input field that appears once you've selected a specific column to filter by. If the user wanted to add an 
  additional filter after the first, a plus button would appear that would render another dropdown menu and input field.</p>


    
    
 
