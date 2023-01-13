<?php
    $connect = mysqli_connect('127.0.0.1', 'root', '', 'school');
    $sql = "SELECT * FROM courses";
    $data = mysqli_query($connect, $sql);
    echo json_encode($data -> fetch_all(MYSQLI_ASSOC));
?>