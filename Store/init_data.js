export const habitInit = "INSERT INTO Habit (name, note, frequency, color, frequencyType, timeRange,\
    reminderMessage, showMemo, chartType, habitStartDate, habitEndDate, goalNo, goalPeriod, unitID, icon, iconFamily, id) VALUES\
    ('Dancing', 'Nothing to note', 'MON,TUE,THU', '#FFAEAE', 'Week', 'Evening', 'Remember to dance', '1', '0', '2022-06-15T14:46:07.830Z', '2023-02-15T14:46:07.830Z',\
    '30', 'Week', '2', 'walking', 'FontAwesome5','dc'),\
    ('Meditate', 'Nothing to note', 'Daily', '#FFAEAE', 'Day', 'Morning', 'Remember to meditate', '0', '0', '2021-02-15T14:46:07.830Z', '2023-02-15T14:46:07.830Z',\
    '10', 'Day', '2', 'walking', 'FontAwesome5','md'),\
    ('Run', 'Nothing to note', 'SUN', '#FFAEAE', 'Week', 'Morning', 'Remember to run', '1', '0', '2022-02-15T14:46:07.830Z', '2023-02-15T14:46:07.830Z',\
    '2', 'Week', '9', 'walking', 'FontAwesome5','rn')"

export const memoInit = "INSERT INTO Memo (habitName, date, content, progress) VALUES\
('Meditate', '2023-02-06', 'Feel so good', '2'),\
('Meditate', '2023-02-07', 'So happy', '4'),\
('Meditate', '2023-02-08', 'So happy', '3'),\
('Run', '2023-02-06', 'Lets go', '0'),\
('Meditate', '2023-02-09', 'Feel so good', '7'),\
('Meditate', '2023-02-10', 'So happy', '2'),\
('Run', '2023-02-07', 'Lets go', '2'),\
('Run', '2023-02-08', 'So happy', '0'),\
('Dancing', '2023-02-06', 'So happy', '12'),\
('Meditate', '2023-02-11', 'Lets go', '9'),\
('Run', '2023-02-09', 'More to go', '0'),\
('Meditate', '2023-02-12', 'More to go', '9'),\
('Run', '2023-02-10', 'More to go', '2'),\
('Run', '2023-02-11', 'Lets go', '1'),\
('Meditate', '2023-03-12', 'Im on a roll', '7'),\
('Dancing', '2023-02-07', 'Feel so good', '23'),\
('Run', '2023-02-12', 'Lets go', '0'),\
('Dancing', '2023-02-08', 'Im getting better everyday', '6'),\
('Run', '2023-02-13', 'Feel so good', '0'),\
('Run', '2023-02-14', 'Lets go', '0'),\
('Meditate', '2023-02-13', 'So happy', '4')"



export const reminderInit = "INSERT INTO Reminder (habitName, time) VALUES\
    ('Meditate', '20-31-20.000'),\
    ('Dancing', '05-11-56.000'),\
    ('Run', '17-16-31.000'),\
    ('Dancing', '10-01-24.000'),\
    ('Dancing', '15-51-45.000'),\
    ('Meditate', '06-39-01.000'),\
    ('Dancing', '19-24-11.000'),\
    ('Run', '19-39-15.000'),\
    ('Meditate', '22-57-36.000'),\
    ('Meditate', '15-19-02.000'),\
    ('Dancing', '06-27-51.000'),\
    ('Dancing', '13-44-35.000'),\
    ('Meditate', '06-44-55.000'),\
    ('Dancing', '04-29-44.000'),\
    ('Run', '09-50-25.000')"

export const tagInit = "INSERT INTO Tag (\"name\") VALUES \
    ('Health'),\
    ('Fitness'),\
    ('Productivity'),\
    ('Mental')"

export const unitInit = "INSERT INTO Unit (\"name\") VALUES \
    ('sec'),\
    ('min'),\
    ('hr'),\
    ('ml'),\
    ('oz'),\
    ('cal'),\
    ('count'),\
    ('steps'),\
    ('m'),\
    ('km'),\
    ('mile')"

export const haveTagInit = "INSERT INTO HaveTag (habitName, tagId) VALUES\
    ('Run', 0),\
    ('Meditate', 3),\
    ('Dancing', 1)"
