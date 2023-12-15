/*
Employee -> {id, salary}; id is the primary key
report the second highest salary from the Employee table. If there is no second highest salary, the query should report NULL.
*/

SELECT *
FROM Employee
WHERE salary = (
    SELECT MAX(salary)
    FROM Employee
    WHERE salary < (SELECT MAX(salary) FROM Employee)
);
