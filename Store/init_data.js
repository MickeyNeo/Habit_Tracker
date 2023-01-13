export const habitInit = "INSERT INTO Habit (name, note, frequency, color, frequencyType, timeRange,\
    reminderMessage, showMemo, chartType, habitStartDate, habitEndDate, goalNo, goalPeriod, unitID, icon, iconFamily) VALUES\
    ('Dancing', 'Nothing to note', 'MON, TUE, THU', '#FFAEAE', 'Week', 'Evening', 'Remember to dance', '1', '0', '2021:01:01', NULL,\
    '30', 'Week', '', 'walking', 'FontAwesome5'),\
    ('Meditate', 'Nothing to note', 'Daily', '#FFAEAE', 'Day', 'Morning', 'Remember to meditate', '0', '0', '2021:01:01', NULL,\
    '10', 'Day', '', 'walking', 'FontAwesome5'),\
    ('Run', 'Nothing to note', 'SUN', '#FFAEAE', 'Week', 'Morning', 'Remember to run', '1', '0', '2021:01:01', NULL,\
    '2', 'Week', '', 'walking', 'FontAwesome5')"

export const memoInit = "INSERT INTO Memo (habitName, date, content, progress) VALUES\
('Meditate', '2022:07:24', 'Feel so good', '2'),\
('Meditate', '2022:04:27', 'So happy', '4'),\
('Meditate', '2022:05:23', 'So happy', '3'),\
('Run', '2022:08:30', 'Lets go', '0'),\
('Meditate', '2021:06:23', 'Feel so good', '7'),\
('Meditate', '2021:07:18', 'So happy', '2'),\
('Run', '2021:01:01', 'Lets go', '2'),\
('Run', '2021:07:29', 'So happy', '0'),\
('Dancing', '2021:05:28', 'So happy', '12'),\
('Meditate', '2022:08:21', 'Lets go', '9'),\
('Run', '2021:01:30', 'More to go', '0'),\
('Meditate', '2021:05:22', 'More to go', '9'),\
('Run', '2022:01:06', 'More to go', '2'),\
('Run', '2022:08:24', 'Lets go', '1'),\
('Meditate', '2022:03:20', 'Im on a roll', '7'),\
('Dancing', '2022:05:06', 'Feel so good', '23'),\
('Run', '2021:02:20', 'Lets go', '0'),\
('Dancing', '2022:09:04', 'Im getting better everyday', '6'),\
('Run', '2021:11:28', 'Feel so good', '0'),\
('Run', '2021:08:17', 'Lets go', '0'),\
('Meditate', '2022:08:09', 'So happy', '4'),\
('Meditate', '2022:02:10', 'Lets go', '3'),\
('Run', '2021:01:20', 'Feel so good', '0'),\
('Dancing', '2021:06:01', 'Lets go', '22'),\
('Run', '2021:11:02', 'Im on a roll', '0'),\
('Meditate', '2022:05:19', 'More to go', '6'),\
('Dancing', '2021:01:28', 'Im getting better everyday', '20'),\
('Meditate', '2021:05:11', 'Lets go', '9'),\
('Meditate', '2021:06:06', 'So happy', '5'),\
('Run', '2022:12:10', 'Im getting better everyday', '1'),\
('Dancing', '2021:12:19', 'Lets go', '3'),\
('Run', '2022:05:31', 'Feel so good', '2'),\
('Dancing', '2022:11:17', 'Feel so good', '22'),\
('Meditate', '2022:10:31', 'Im getting better everyday', '1'),\
('Dancing', '2022:04:02', 'Feel so good', '0'),\
('Meditate', '2022:02:09', 'So happy', '1'),\
('Meditate', '2021:09:15', 'So happy', '1'),\
('Meditate', '2022:04:07', 'Feel so good', '9'),\
('Run', '2022:05:26', 'Im on a roll', '0'),\
('Dancing', '2021:09:25', 'Lets go', '18'),\
('Meditate', '2022:02:24', 'More to go', '4'),\
('Dancing', '2021:01:16', 'Lets go', '20'),\
('Run', '2022:07:08', 'Im getting better everyday', '0'),\
('Run', '2021:05:23', 'Lets go', '0'),\
('Run', '2022:10:05', 'Im on a roll', '0'),\
('Dancing', '2022:05:29', 'More to go', '13'),\
('Meditate', '2022:10:09', 'More to go', '8'),\
('Run', '2022:05:27', 'Im getting better everyday', '1'),\
('Run', '2021:12:23', 'Im on a roll', '1'),\
('Meditate', '2022:09:03', 'Lets go', '3'),\
('Dancing', '2021:05:27', 'Im getting better everyday', '30'),\
('Meditate', '2021:02:22', 'Im on a roll', '1'),\
('Meditate', '2022:05:30', 'More to go', '6'),\
('Meditate', '2022:12:07', 'Im getting better everyday', '5'),\
('Dancing', '2022:03:04', 'Lets go', '26'),\
('Dancing', '2021:10:30', 'So happy', '9'),\
('Run', '2022:09:13', 'Im on a roll', '0'),\
('Run', '2021:06:19', 'Lets go', '2'),\
('Meditate', '2021:08:28', 'Im getting better everyday', '2'),\
('Run', '2022:12:08', 'More to go', '0'),\
('Run', '2021:12:17', 'Lets go', '2'),\
('Meditate', '2022:10:08', 'So happy', '4'),\
('Meditate', '2021:11:12', 'Im on a roll', '1'),\
('Dancing', '2021:02:15', 'Im on a roll', '5'),\
('Meditate', '2022:05:11', 'So happy', '5'),\
('Dancing', '2021:12:16', 'Im getting better everyday', '0'),\
('Meditate', '2022:01:01', 'Feel so good', '3'),\
('Run', '2022:11:15', 'Im getting better everyday', '2'),\
('Meditate', '2021:05:23', 'Feel so good', '9'),\
('Run', '2022:01:05', 'Lets go', '1'),\
('Meditate', '2021:03:19', 'Im getting better everyday', '3'),\
('Dancing', '2021:03:01', 'So happy', '17'),\
('Run', '2021:11:18', 'Im on a roll', '0'),\
('Run', '2021:04:07', 'Feel so good', '0'),\
('Run', '2022:03:19', 'Feel so good', '0'),\
('Run', '2022:03:21', 'So happy', '0'),\
('Run', '2022:12:19', 'More to go', '1'),\
('Dancing', '2021:05:19', 'Im on a roll', '10'),\
('Run', '2022:11:06', 'More to go', '2'),\
('Dancing', '2021:11:10', 'Im on a roll', '1'),\
('Meditate', '2022:01:16', 'Lets go', '7'),\
('Meditate', '2022:06:13', 'Feel so good', '6'),\
('Dancing', '2021:03:23', 'Im on a roll', '22'),\
('Run', '2021:04:12', 'Lets go', '2'),\
('Run', '2022:05:29', 'Lets go', '1'),\
('Run', '2022:06:10', 'Feel so good', '0'),\
('Meditate', '2023:01:10', 'So happy', '9'),\
('Dancing', '2021:05:14', 'Im getting better everyday', '28'),\
('Dancing', '2021:12:25', 'Im getting better everyday', '0'),\
('Dancing', '2022:08:05', 'Feel so good', '23'),\
('Dancing', '2021:10:05', 'So happy', '0'),\
('Meditate', '2021:07:01', 'More to go', '0'),\
('Run', '2021:08:22', 'So happy', '2'),\
('Run', '2021:12:06', 'So happy', '2'),\
('Run', '2022:07:16', 'Im getting better everyday', '1'),\
('Run', '2021:09:19', 'More to go', '2'),\
('Dancing', '2022:09:22', 'Lets go', '10'),\
('Dancing', '2021:08:31', 'So happy', '24'),\
('Run', '2022:01:11', 'Im getting better everyday', '2'),\
('Run', '2021:09:03', 'More to go', '2'),\
('Run', '2022:10:13', 'Im on a roll', '0'),\
('Dancing', '2021:07:28', 'Lets go', '25'),\
('Meditate', '2021:11:18', 'So happy', '4'),\
('Meditate', '2022:10:21', 'Feel so good', '10'),\
('Run', '2021:07:08', 'Im getting better everyday', '1'),\
('Dancing', '2022:12:02', 'Im on a roll', '23'),\
('Meditate', '2021:07:26', 'Im getting better everyday', '1'),\
('Dancing', '2021:12:22', 'Lets go', '15'),\
('Dancing', '2021:03:15', 'Im on a roll', '4'),\
('Dancing', '2022:09:23', 'Im getting better everyday', '21'),\
('Dancing', '2022:08:23', 'Feel so good', '22'),\
('Dancing', '2021:11:13', 'Lets go', '16'),\
('Dancing', '2022:09:14', 'Feel so good', '13'),\
('Meditate', '2021:04:30', 'Lets go', '9'),\
('Run', '2021:02:09', 'Im on a roll', '1'),\
('Run', '2021:01:18', 'More to go', '2'),\
('Run', '2022:11:21', 'Lets go', '2'),\
('Dancing', '2022:04:25', 'So happy', '11'),\
('Run', '2022:11:20', 'Im getting better everyday', '2'),\
('Meditate', '2021:08:30', 'More to go', '8'),\
('Dancing', '2022:08:07', 'Im getting better everyday', '14'),\
('Dancing', '2021:08:03', 'Feel so good', '17'),\
('Dancing', '2021:05:15', 'Lets go', '26'),\
('Run', '2023:01:11', 'Feel so good', '1'),\
('Dancing', '2021:12:27', 'Lets go', '2'),\
('Run', '2021:04:28', 'So happy', '1'),\
('Run', '2022:04:03', 'Lets go', '0'),\
('Meditate', '2022:05:10', 'Feel so good', '9'),\
('Run', '2021:11:06', 'Im getting better everyday', '0'),\
('Run', '2021:11:16', 'So happy', '0'),\
('Run', '2022:11:01', 'Lets go', '2'),\
('Meditate', '2021:04:05', 'Im getting better everyday', '6'),\
('Dancing', '2022:08:29', 'More to go', '18'),\
('Run', '2022:08:10', 'Lets go', '1'),\
('Dancing', '2021:12:28', 'Feel so good', '1'),\
('Run', '2022:11:25', 'Im on a roll', '0'),\
('Run', '2021:01:25', 'Im getting better everyday', '1'),\
('Run', '2022:03:16', 'So happy', '0'),\
('Meditate', '2021:04:26', 'Feel so good', '6'),\
('Dancing', '2021:12:02', 'Feel so good', '12'),\
('Meditate', '2022:11:03', 'More to go', '8'),\
('Run', '2021:01:26', 'More to go', '1'),\
('Meditate', '2021:09:09', 'Lets go', '10'),\
('Run', '2021:03:30', 'Im getting better everyday', '2'),\
('Meditate', '2022:05:20', 'Im on a roll', '8'),\
('Meditate', '2021:12:31', 'So happy', '6'),\
('Run', '2022:09:22', 'So happy', '0'),\
('Run', '2022:08:06', 'Im getting better everyday', '0'),\
('Run', '2022:09:14', 'Im getting better everyday', '2'),\
('Run', '2021:02:25', 'Im getting better everyday', '1'),\
('Meditate', '2021:02:28', 'Im getting better everyday', '0'),\
('Dancing', '2021:06:03', 'Im getting better everyday', '3'),\
('Dancing', '2021:10:06', 'Feel so good', '22'),\
('Meditate', '2022:03:28', 'So happy', '7'),\
('Meditate', '2022:07:27', 'Im getting better everyday', '1'),\
('Run', '2021:08:07', 'Im on a roll', '2'),\
('Run', '2021:06:02', 'More to go', '1'),\
('Run', '2022:08:27', 'Im on a roll', '1'),\
('Run', '2022:09:07', 'Im on a roll', '0'),\
('Run', '2022:12:17', 'More to go', '2'),\
('Dancing', '2021:11:23', 'So happy', '21'),\
('Run', '2022:12:07', 'Im getting better everyday', '1'),\
('Run', '2022:09:11', 'Im on a roll', '0'),\
('Meditate', '2022:02:26', 'More to go', '10'),\
('Meditate', '2021:05:12', 'So happy', '4'),\
('Dancing', '2021:08:08', 'So happy', '6'),\
('Meditate', '2022:02:13', 'Lets go', '9'),\
('Run', '2022:06:05', 'Feel so good', '2'),\
('Meditate', '2022:10:30', 'Feel so good', '9'),\
('Meditate', '2022:08:22', 'More to go', '2'),\
('Run', '2022:09:02', 'Feel so good', '1'),\
('Meditate', '2022:01:09', 'Im on a roll', '5'),\
('Meditate', '2021:07:19', 'Im on a roll', '1'),\
('Run', '2022:01:29', 'Im on a roll', '1'),\
('Run', '2022:03:05', 'Lets go', '1'),\
('Dancing', '2021:06:14', 'Lets go', '27'),\
('Run', '2022:07:27', 'Lets go', '0'),\
('Meditate', '2021:10:28', 'Im on a roll', '5'),\
('Dancing', '2022:10:17', 'Feel so good', '20'),\
('Run', '2021:07:14', 'More to go', '2'),\
('Run', '2022:05:16', 'Lets go', '2'),\
('Dancing', '2021:01:29', 'Im on a roll', '28'),\
('Dancing', '2023:01:08', 'So happy', '5'),\
('Run', '2021:11:27', 'Im getting better everyday', '2'),\
('Dancing', '2021:04:27', 'Im getting better everyday', '14'),\
('Run', '2022:08:22', 'So happy', '0'),\
('Dancing', '2021:09:20', 'Feel so good', '25'),\
('Run', '2021:02:15', 'Im getting better everyday', '0'),\
('Dancing', '2022:07:24', 'Im on a roll', '27'),\
('Meditate', '2022:01:03', 'Im on a roll', '9'),\
('Dancing', '2021:10:26', 'Lets go', '25'),\
('Meditate', '2021:08:16', 'Feel so good', '7'),\
('Meditate', '2021:06:02', 'So happy', '10'),\
('Run', '2022:07:05', 'Im on a roll', '2'),\
('Meditate', '2022:03:18', 'So happy', '10'),\
('Meditate', '2021:12:09', 'Lets go', '6'),\
('Dancing', '2021:05:06', 'Im on a roll', '16'),\
('Dancing', '2022:05:27', 'So happy', '1'),\
('Run', '2022:06:23', 'Feel so good', '1'),\
('Dancing', '2023:01:07', 'More to go', '14'),\
('Run', '2022:02:06', 'Im getting better everyday', '1'),\
('Meditate', '2022:02:15', 'So happy', '3'),\
('Meditate', '2021:04:23', 'Feel so good', '0'),\
('Run', '2021:10:26', 'Lets go', '1'),\
('Meditate', '2021:10:18', 'Feel so good', '9'),\
('Run', '2021:05:15', 'Feel so good', '2'),\
('Run', '2021:12:12', 'Feel so good', '0'),\
('Run', '2022:05:13', 'Lets go', '0'),\
('Run', '2021:06:29', 'Lets go', '2'),\
('Dancing', '2021:04:28', 'More to go', '16'),\
('Meditate', '2021:12:12', 'Feel so good', '6'),\
('Dancing', '2021:06:09', 'Feel so good', '13'),\
('Meditate', '2021:01:25', 'Feel so good', '1'),\
('Meditate', '2022:01:31', 'More to go', '10'),\
('Meditate', '2021:07:22', 'Feel so good', '8'),\
('Run', '2022:11:09', 'Im getting better everyday', '2'),\
('Dancing', '2023:01:02', 'More to go', '6'),\
('Run', '2021:03:16', 'Lets go', '0'),\
('Run', '2022:12:22', 'Feel so good', '0'),\
('Run', '2021:08:15', 'Feel so good', '1'),\
('Meditate', '2021:08:21', 'More to go', '1'),\
('Run', '2021:05:21', 'Lets go', '0'),\
('Dancing', '2022:10:18', 'Feel so good', '6'),\
('Meditate', '2022:09:15', 'Lets go', '8'),\
('Meditate', '2022:04:01', 'Im getting better everyday', '8'),\
('Dancing', '2022:07:26', 'Im getting better everyday', '8'),\
('Run', '2021:03:15', 'Im getting better everyday', '2'),\
('Run', '2021:06:12', 'Im getting better everyday', '2'),\
('Dancing', '2021:12:09', 'So happy', '0'),\
('Run', '2022:12:16', 'Im on a roll', '0'),\
('Meditate', '2022:07:14', 'Im getting better everyday', '9'),\
('Meditate', '2022:08:04', 'Im getting better everyday', '9'),\
('Run', '2021:04:17', 'Im getting better everyday', '2'),\
('Dancing', '2021:01:10', 'Lets go', '21'),\
('Meditate', '2022:12:29', 'So happy', '10'),\
('Meditate', '2021:11:07', 'So happy', '8'),\
('Dancing', '2021:09:28', 'Lets go', '13'),\
('Dancing', '2021:01:06', 'Im on a roll', '7'),\
('Run', '2021:07:09', 'Im on a roll', '2'),\
('Dancing', '2022:09:12', 'Im getting better everyday', '9'),\
('Meditate', '2021:07:03', 'Feel so good', '9'),\
('Dancing', '2021:05:13', 'Lets go', '28'),\
('Meditate', '2022:07:11', 'More to go', '3'),\
('Run', '2022:05:12', 'Lets go', '0'),\
('Meditate', '2021:08:07', 'More to go', '4'),\
('Run', '2021:09:18', 'Im on a roll', '2'),\
('Dancing', '2022:10:28', 'Im on a roll', '30'),\
('Run', '2021:02:22', 'Im getting better everyday', '1'),\
('Meditate', '2021:04:07', 'So happy', '8'),\
('Run', '2022:06:08', 'Lets go', '1'),\
('Run', '2021:08:30', 'So happy', '0'),\
('Dancing', '2022:01:18', 'More to go', '29'),\
('Meditate', '2022:06:15', 'More to go', '4'),\
('Meditate', '2021:08:09', 'More to go', '4'),\
('Meditate', '2022:06:06', 'Feel so good', '4'),\
('Run', '2021:04:21', 'Im on a roll', '0'),\
('Meditate', '2021:02:09', 'Im getting better everyday', '0'),\
('Meditate', '2022:02:23', 'Im getting better everyday', '8'),\
('Dancing', '2022:08:12', 'More to go', '2'),\
('Run', '2021:10:11', 'Im on a roll', '1'),\
('Dancing', '2022:11:06', 'So happy', '29'),\
('Dancing', '2021:08:01', 'Lets go', '0'),\
('Meditate', '2021:01:15', 'Feel so good', '5'),\
('Run', '2021:05:05', 'Im getting better everyday', '0'),\
('Run', '2021:01:19', 'Im getting better everyday', '2'),\
('Run', '2021:02:12', 'Im getting better everyday', '1'),\
('Run', '2022:02:20', 'Lets go', '2'),\
('Run', '2022:12:24', 'So happy', '2'),\
('Run', '2021:11:08', 'More to go', '1'),\
('Run', '2021:11:22', 'So happy', '2'),\
('Run', '2022:08:26', 'Lets go', '2'),\
('Dancing', '2021:08:18', 'So happy', '26'),\
('Meditate', '2022:09:05', 'Lets go', '2'),\
('Meditate', '2022:12:16', 'More to go', '1'),\
('Meditate', '2022:03:21', 'So happy', '4'),\
('Dancing', '2021:06:25', 'Im getting better everyday', '24'),\
('Run', '2021:05:29', 'Feel so good', '1'),\
('Dancing', '2021:07:17', 'Lets go', '12'),\
('Dancing', '2022:12:25', 'So happy', '9'),\
('Dancing', '2021:11:03', 'So happy', '10'),\
('Meditate', '2022:04:25', 'More to go', '5'),\
('Meditate', '2022:07:19', 'Im getting better everyday', '0'),\
('Run', '2022:08:19', 'So happy', '2'),\
('Run', '2023:01:07', 'Lets go', '1'),\
('Meditate', '2022:08:23', 'So happy', '8'),\
('Meditate', '2022:02:01', 'Im getting better everyday', '4'),\
('Dancing', '2022:08:31', 'Feel so good', '7'),\
('Dancing', '2022:09:27', 'Lets go', '7'),\
('Run', '2022:04:24', 'Lets go', '1'),\
('Dancing', '2022:06:26', 'So happy', '8'),\
('Dancing', '2022:03:03', 'Im getting better everyday', '16'),\
('Meditate', '2022:09:02', 'Lets go', '7'),\
('Run', '2022:03:29', 'Feel so good', '0'),\
('Run', '2021:02:16', 'So happy', '1'),\
('Run', '2021:01:13', 'Lets go', '1'),\
('Run', '2022:07:17', 'Lets go', '2'),\
('Meditate', '2022:10:10', 'More to go', '2'),\
('Meditate', '2021:04:20', 'So happy', '4'),\
('Run', '2022:04:19', 'Feel so good', '2'),\
('Meditate', '2023:01:08', 'Lets go', '9')"

export const reminderInit = "INSERT INTO Reminder (habitName, time) VALUES\
    ('Meditate', '20:31:20.000'),\
    ('Dancing', '05:11:56.000'),\
    ('Run', '17:16:31.000'),\
    ('Dancing', '10:01:24.000'),\
    ('Dancing', '15:51:45.000'),\
    ('Meditate', '06:39:01.000'),\
    ('Dancing', '19:24:11.000'),\
    ('Run', '19:39:15.000'),\
    ('Meditate', '22:57:36.000'),\
    ('Meditate', '15:19:02.000'),\
    ('Dancing', '06:27:51.000'),\
    ('Dancing', '13:44:35.000'),\
    ('Meditate', '06:44:55.000'),\
    ('Dancing', '04:29:44.000'),\
    ('Run', '09:50:25.000')"

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