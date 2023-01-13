<?php
    $action = $_GET['action'] ?? '';

    switch ($action) {
        case '': 
            include('./Views/Course/index.php');
        case 'course':
            include('./Models/course.php');
            include('./Views/Course/course.php');

    }
?>