<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$country = $_GET['country'] ?? '';
$lookup = $_GET['lookup'] ?? '';

if ($lookup == 'cities'){
  $stmt = $conn->query("SELECT * FROM `countries` INNER JOIN `cities` ON cities.country_code=countries.code WHERE countries.name LIKE '%$country%'");
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  ?>
  <table>
    <tr>
      <th>Name</th>
      <th>District</th>
      <th>Population</th>
    </tr>
  <?php foreach ($results as $row): ?>
    <tr>
      <td><?= $row['name']?></td>
      <td><?= $row['district']?></td>
      <td><?= $row['population']?></td>
    </tr>
  <?php endforeach; ?>
  </table>
  <?php

}else{
  $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    ?>
  <table>
    <thead>
      <tr>
      <th>Country Name</th>
      <th>Continent</th>
      <th>Independence Year</th>
      <th>Head of State</th>
    </tr>
    </thead>
    <tbody>
      <?php foreach ($results as $row): ?>
    <tr>
      <td><?= $row['name']?></td>
      <td><?= $row['continent']?></td>
      <td><?= $row['independence_year']?></td>
      <td><?= $row['head_of_state']?></td>
    </tr>
  <?php endforeach; ?>
    </tbody>
  </table>
  <?php
}



