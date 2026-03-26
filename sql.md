# SQL Scenario Questions

### Question no 1

*   How would you use the SELECT statement with a WHERE  
    clause to retrieve specific data based on a condition?

### Table

```
 create table employees
(
  empId int primary key,
  first_name varchar(50),
  last_name varchar(50),
  department varchar(50),
  salary decimal(10, 2)
)
```

### query

```
select * from employees
where department = 'Finance'
```

### Question no 2

*   You need to add a new employee named John Doe to the employees table with a salary of 50,000 and a department of HR

### Table

```
INSERT INTO
    EMPLOYEES (EMPID, FIRST_NAME, LAST_NAME, DEPARTMENT, SALARY)
VALUES
    (51, 'John', 'Doe', 'HR', 50000)
```

### Output

| EMPID | FIRST_NAME | LAST_NAME | DEPARTMENT | SALARY   |
| ----- | ---------- | --------- | ---------- | -------- |
| 51    | John       | Doe       | HR         | 50000.00 |
