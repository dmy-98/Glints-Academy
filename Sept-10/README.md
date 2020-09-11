# OOP Exercise

## Learning Competencies
- Students understand how to make class
- Students understand about OOP Concept
- Students can analyze the task

## Agrippa the Strategist
In the western of Europe in old times. There was a strategist known named Agrippa. His strategy was amazing every single time he made a plan, he always made the Empire won!.
According to the scouts, enemies from the North has made their move to ambush Agrippa beloved nation. This is the time he would prepare the armies and the Barrack.
The objectives are very clear! Prepare and then launch! 

### Task Objectives
**Prepare the armies and barrack which can recruit and then attack**

### Ready the army! - Task 1 (15%)
Make Army class that have 
- attributes :
    - name
    - type
    - level (default 1)

- method : 
    - talk (console log about his name type level)
    - training (can level army up to 10)

### Train another army - Task 2 (15%)
Make another class from the Army
- Knight
- Spearman
- Archer

Each class has override the talk method.

### Barrack - Task 3 (50%)
All the process must be in Barrack.
```javascript
class Barrack {
    constructor(slots){
        this.slots = slots || []
    }
    recruit(army){
        
    }
    summon(){

    }
    disband(name){
        
    }
}
```

Barrack require :
- Properties
    - Array of Instance of (_not just object_)
    ```javascript
    [
        Knight {
            ...
        }
    ]
    ```
- Method
    - Recruit is for adding in the armies slot
    - disband is for deleting an army from the slot
    - Summon is for print the current armies

### Group armies - Task 5 (10%)
Insert a method to group from their type.
```javascript
Result : 
{
    knight : [
        ...
    ],
    spearman : [
        ...
    ],
    archer : [
        ...
    ]
}
```
### Tidy Up files! - Task 5 (10%)
Split the files into 3 js'es.
- index (main) -> node index.js
- army
- barrack

## Procedure
- Boleh mnambah var baru jika diperlukan
- Penamaan var harus jelas
- Kerjakan yang mudah terlebih dulu
- Identasi/spasi/tab di perhatikan
- DRY and Clean Code!
