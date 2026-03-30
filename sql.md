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

### Query

```
INSERT INTO
    EMPLOYEES (EMPID, FIRST_NAME, LAST_NAME, DEPARTMENT, SALARY)
VALUES
    (51, 'John', 'Doe', 'HR', 50000)
```

### Output

| EMPID | FIRST\_NAME | LAST\_NAME | DEPARTMENT | SALARY |
| --- | --- | --- | --- | --- |
| 51 | John | Doe | HR | 50000.00 |
#

### Question no 3

*   How would you use the UPDATE statement to modify
existing records? Increase the salary of increase the salary of all employees in the IT department by 10%

### Query

```
 update employees 
 set salary = salary * 1.10
 where "department" = 'IT'
```
#

### Question no 4

*   The HR department has been closed,
and all employees in HR must be
removed from the database.

### Query

```
 delete from employees where "department" = 'HR'
```
#

### Question no 5

*   You need to filter employees with salaries
between 30,000 and 60,000.

### Query

```
 select * from employees where salary
 between 30000 and 60000
```
#

### Question no 6

*   You need to retrieve employees whose
salaries are not 40,000.

### Query

```
 select * from employees where salary
 != 40000
```
#

### Question no 7

*   Calculate the number of employees in each department.

### Query

``` 
select department, count(*) from employees group by department
```
#


### Question no 8

*   Calculate the total number of employees and  salary of all employees in each department.

### Query

``` 
select department,
count(*),
sum(salary)
from employees group by department 

```
#




