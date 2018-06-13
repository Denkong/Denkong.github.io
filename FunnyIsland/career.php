<?php
  $career_data = [
    [name => "Carpenter", image => "carpenter.jpeg"],
    [name => "Park Helper", image => "park-helper.jpeg"],
    [name => "Financial manager", image => "financial-manager.jpeg"],
    [name => "Mobile app developer", image => "mobile-app-devoloper.jpeg"],
    [name => "Copywriter", image => "copywriter.jpeg"],
  ];
  header('Content-Type: application/json');
  echo json_encode($career_data);
