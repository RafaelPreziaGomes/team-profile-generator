var bodyHTML = "";
export default function generateTeam(team) {
  console.log(team[0].name);
  const role = team[0].getRole();
  console.log(`Role: ${role}`);

  for (var i = 0; i < team.length; i++) {
    const role = team[i].getRole();

    switch (role) {
      case "Manager":
        generateManager(team[i]);
        break;

      case "Engineer":
        generateEngineer(team[i]);
        break;

      case "Intern":
        generateIntern(team[i]);
        break;
    }
  }

  var htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <style>

    * {
    font-family: ubuntu;
  }
  
  .bg-blue {
    background-color: rgb(243, 243, 243);
    color: rgb(2, 0, 0);
    font-family: ubuntu;
  }
  
  .card {
    display: inline-block;
    width: 100%;
    margin: 10px 0;
    font-family: ubuntu;
  }
  
  h1 {
    border: 3px solid #007bff;
    background-color: #007bff;
    border-radius: 5px;
    margin: 10px;
    color: white;
    font-family: ubuntu;
  }
  </style>
    <body>
    <div class="container">
        <div class="row">    
            <div class="col mx-auto">
                <h1 class="text-center">My Team</h1>
    
                <div class="card-deck">
                    ${bodyHTML}
                </div>
            </div>
        </div>
    </div>    
    </body>
    </html>
    `;

  return htmlTemplate;
}

function generateManager(manager) {
  var managerHTML = `
    <div class="card">
        
        <div class="card-title bg-blue p-3">
            ${manager.name} - ID: ${manager.id}
        
            <div class="card-subtitle p-3">
                Manager
            </div>
        </div>
        
        <div class="card-body">
            <p><i class="fa-solid fa-envelope"></i> | <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p><i class="fa-solid fa-building-columns"></i> | ${manager.office}</p>
        </div>
    </div>
    `;

  bodyHTML += managerHTML;
  return bodyHTML;
}

function generateEngineer(engineer) {
  var engineerHTML = `
    <div class="card">
        
    <div class="card-title bg-blue p-3">
            ${engineer.name} - ID: ${engineer.id}
        
            <div class="card-subtitle p-3">
                Engineer
            </div>
        </div>
        <div class="card-body">
            <p><i class="fa-solid fa-envelope"></i> | <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p><i class="fa-brands fa-github-square"></i> | <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
    </div>
    `;

  bodyHTML += engineerHTML;
  return bodyHTML;
}

function generateIntern(intern) {
  var internHTML = `
    <div class="card">
        
    <div class="card-title bg-blue p-3">
            ${intern.name} - ID: ${intern.id}
        
            <div class="card-subtitle p-3">
                Intern
            </div>
        </div>
        <div class="card-body">
            <p><i class="fa-solid fa-envelope"></i> | <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p><i class="fa-solid fa-graduation-cap"></i> | ${intern.school}</p>
        </div>
    </div>
    `;

  bodyHTML += internHTML;
  return bodyHTML;
}
