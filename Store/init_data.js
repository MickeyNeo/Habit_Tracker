export const habitInit = "INSERT INTO Habit (name, note, frequency, color, frequencyType, timeRange, reminderMessage, showMemo, \
    chartType, habitStartDate, habitEndDate, goalNo, goalPeriod, unitID, icon, iconFamily, id, flag, tag) VALUES\
    ('Dancing', 'Nothing to note', 'MON,TUE,THU', '#FFAEAE', 'Weekly', 'Evening', 'Remember to dance', '1', '0', '2022-06-15T14:46:07.830Z', '2023-02-15T14:46:07.830Z',\
    '30', 'Week', '2', 'walking', 'FontAwesome5','dc', '1', 'Fitness'),\
    ('Meditate', 'Nothing to note', 'Daily', '#00ffff', 'Daily', 'Morning', 'Remember to meditate', '0', '0', '2021-02-15T14:46:07.830Z', '2023-02-15T14:46:07.830Z',\
    '10', 'Day', '2', 'meditation', 'MaterialCommunityIcons','me', '1', 'Mental'),\
    ('Run', 'Nothing to note', '6, 7, 13, 14, 20, 21', 'green', 'Monthly', 'Morning', 'Remember to run', '1', '0', '2022-02-15T14:46:07.830Z', '2023-02-15T14:46:07.830Z',\
    '2', 'Day', '9', 'running', 'FontAwesome5','ru', '1', 'Health')"

export const memoInit = "INSERT INTO Memo (habitName, date, content, progress) VALUES\
('Run', '2023-02-14', 'Im on a roll', '0'),\
('Run', '2023-02-13', 'So happy', '2'),\
('Meditate', '2023-02-22', 'More to go', '2'),\
('Meditate', '2023-02-18', 'Feel so good', '4'),\
('Meditate', '2023-02-17', 'Im on a roll', '7'),\
('Meditate', '2023-01-20', 'Im getting better everyday', '10'),\
('Meditate', '2023-02-15', 'So happy', '6'),\
('Meditate', '2023-02-16', 'Im on a roll', '1'),\
('Meditate', '2023-01-21', 'More to go', '9'),\
('Meditate', '2023-01-19', 'Im on a roll', '5'),\
('Meditate', '2023-01-23', 'Im getting better everyday', '1'),\
('Meditate', '2023-01-24', 'Feel so good', '3'),\
('Dancing', '2023-02-23', 'More to go', '16'),\
('Dancing', '2023-02-20', 'More to go', '29'),\
('Dancing', '2023-02-16', 'So happy', '10'),\
('Dancing', '2023-02-14', 'So happy', '28')"



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

export const settingInit = "INSERT INTO Setting (id, theme, dateBarStyle, habitBarSize, dailyReminderText, dailyReminderTime, habitStat) VALUES\
(0, 'light', 'Week', 'Small', '', '', 1)"