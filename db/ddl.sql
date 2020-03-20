CREATE TABLE Users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    givenname VARCHAR(30) NOT NULL, 
    surname VARCHAR(30) NOT NULL, 
    email VARCHAR(80) NOT NULL, 
    password BINARY(80) NOT NULL, 
    lastaccess DATETIME
    );
ALTER TABLE Users AUTO_INCREMENT = 2220;

CREATE TABLE Accounts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    userid INT UNSIGNED NOT NULL, 
    name VARCHAR(30) NOT NULL,
    balance DECIMAL(13,2) NOT NULL DEFAULT 0,
    notes VARCHAR(200),
    FOREIGN KEY(userid) REFERENCES Users(id)
);
ALTER TABLE Accounts AUTO_INCREMENT = 102;

CREATE TABLE Transactions (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    accountid INT UNSIGNED NOT NULL,
    payerid INT UNSIGNED NOT NULL, 
    paiddate DATETIME NOT NULL DEFAULT NOW(), 
    payee VARCHAR(100) NOT NULL,
    amount DECIMAL(13,2) NOT NULL,
    category VARCHAR(255) NOT NULL DEFAULT 'Misc',
    FOREIGN KEY(payerid) REFERENCES Users(id),
    FOREIGN KEY(accountid) REFERENCES Accounts(id)    
);
ALTER TABLE Transactions AUTO_INCREMENT = 31;