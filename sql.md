# SQL Scenario Questions

### Question no 1

- How would you use the SELECT statement with a WHERE
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