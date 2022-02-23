CREATE TABLE annotation(
    id SERIAL PRIMARY KEY,
    projectId TEXT,
    userId TEXT,
    startTime REAL,
    stopTime REAL
);
INSERT INTO annotation ( projectId,userId,startTime,stopTime) VALUES ('projet1','user1', 13,14)