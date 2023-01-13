export const habitInit = "INSERT INTO Habit (name, note, frequency, color, tagID, frequencyType, timeRange,\
    reminderMessage, showMemo, chartType, habitStartDate, habitEndDate, goalNo, goalPeriod, unitID, icon, iconFamily) VALUES\
    ('Dancing', 'Nothing to note', 'Mon, Tue, Thurs', '#000', 'Week', 'Evening', 'Remember to dance', '1', '0', '2021:01:01 00:00:00.000', NULL\
    '30', 'Week', '1', NULL, NULL),\
    ('Meditate', 'Nothing to note', '1', '#000', 'Day', 'Morning', 'Remember to meditate', '0', '0', '2021:01:01 00:00:00.000', NULL\
    '10', 'Day', '1', NULL, NULL),\
    ('Run', 'Nothing to note', 'Sun', '#000', 'Week', 'Morning', 'Remember to run', '1', '0', '2021:01:01 00:00:00.000', NULL\
    '2', 'Week', '2', NULL, NULL)"

export const memoInit = "INSERT INTO Memo (habitName, date, content, progress) VALUES\
    ('Run', '2021:06:14', 'I'm on a roll', '0'),\
    ('Dancing', '2021:09:14', 'More to go', '24'),\
    ('Dancing', '2021:11:24', 'Feel so good', '28'),\
    ('Run', '2022:10:24', 'Let's go', '2'),\
    ('Run', '2022:02:22', 'More to go', '1'),\
    ('Meditate', '2022:02:05', 'So happy', '7'),\
    ('Dancing', '2022:07:12', 'I'm on a roll', '13'),\
    ('Run', '2022:04:01', 'So happy', '1'),\
    ('Dancing', '2022:04:08', 'So happy', '30'),\
    ('Run', '2022:05:27', 'Feel so good', '0'),\
    ('Dancing', '2022:09:27', 'More to go', '16'),\
    ('Dancing', '2021:04:21', 'Feel so good', '0'),\
    ('Dancing', '2022:12:06', 'I'm getting better everyday', '12'),\
    ('Meditate', '2021:08:14', 'So happy', '9'),\
    ('Dancing', '2022:12:16', 'So happy', '25'),\
    ('Meditate', '2021:09:19', 'I'm on a roll', '0'),\
    ('Meditate', '2021:12:13', 'More to go', '10'),\
    ('Meditate', '2022:11:17', 'So happy', '7'),\
    ('Dancing', '2022:01:06', 'So happy', '1'),\
    ('Dancing', '2021:03:22', 'Let's go', '15'),\
    ('Meditate', '2021:04:19', 'I'm on a roll', '5'),\
    ('Meditate', '2022:10:03', 'Let's go', '10'),\
    ('Run', '2023:01:02', 'So happy', '1'),\
    ('Run', '2022:05:25', 'More to go', '2'),\
    ('Meditate', '2022:03:11', 'Feel so good', '7'),\
    ('Dancing', '2022:08:23', 'Feel so good', '7'),\
    ('Dancing', '2022:07:20', 'More to go', '21'),\
    ('Meditate', '2021:10:14', 'Let's go', '5'),\
    ('Dancing', '2021:12:19', 'More to go', '4'),\
    ('Run', '2022:03:21', 'I'm on a roll', '2'),\
    ('Meditate', '2022:12:16', 'Feel so good', '7'),\
    ('Meditate', '2021:09:27', 'So happy', '2'),\
    ('Meditate', '2021:03:06', 'More to go', '3'),\
    ('Dancing', '2021:10:24', 'So happy', '30'),\
    ('Meditate', '2022:04:18', 'I'm getting better everyday', '10'),\
    ('Dancing', '2021:03:31', 'Feel so good', '15'),\
    ('Dancing', '2022:11:02', 'I'm getting better everyday', '16'),\
    ('Run', '2021:07:18', 'I'm on a roll', '0'),\
    ('Dancing', '2021:08:03', 'I'm getting better everyday', '25'),\
    ('Dancing', '2021:08:01', 'Feel so good', '1'),\
    ('Meditate', '2022:12:03', 'I'm getting better everyday', '9'),\
    ('Dancing', '2021:11:29', 'So happy', '21'),\
    ('Run', '2022:05:24', 'Feel so good', '2'),\
    ('Run', '2021:09:16', 'More to go', '0'),\
    ('Run', '2021:10:08', 'Let's go', '2'),\
    ('Meditate', '2022:02:01', 'Feel so good', '5'),\
    ('Run', '2022:01:10', 'I'm getting better everyday', '2'),\
    ('Run', '2021:05:25', 'I'm on a roll', '2'),\
    ('Meditate', '2021:10:17', 'Let's go', '5'),\
    ('Meditate', '2021:07:20', 'Let's go', '5'),\
    ('Run', '2022:03:11', 'Feel so good', '1'),\
    ('Meditate', '2022:06:17', 'I'm on a roll', '1'),\
    ('Dancing', '2022:11:25', 'I'm on a roll', '16'),\
    ('Run', '2022:05:01', 'I'm getting better everyday', '2'),\
    ('Dancing', '2021:02:07', 'I'm on a roll', '23'),\
    ('Run', '2021:07:06', 'So happy', '0'),\
    ('Dancing', '2022:12:26', 'Feel so good', '4'),\
    ('Dancing', '2022:09:18', 'More to go', '0'),\
    ('Meditate', '2022:07:14', 'Feel so good', '10'),\
    ('Dancing', '2021:11:25', 'I'm getting better everyday', '3'),\
    ('Meditate', '2021:02:27', 'I'm getting better everyday', '9'),\
    ('Dancing', '2021:02:15', 'Feel so good', '8'),\
    ('Run', '2021:04:24', 'Let's go', '0'),\
    ('Run', '2022:08:12', 'I'm getting better everyday', '1'),\
    ('Meditate', '2022:07:24', 'Let's go', '2'),\
    ('Meditate', '2022:12:19', 'More to go', '6'),\
    ('Meditate', '2021:10:31', 'So happy', '9'),\
    ('Meditate', '2021:06:22', 'Feel so good', '9'),\
    ('Run', '2022:02:26', 'I'm on a roll', '2'),\
    ('Dancing', '2022:05:06', 'I'm on a roll', '7'),\
    ('Meditate', '2022:05:12', 'I'm getting better everyday', '2'),\
    ('Meditate', '2022:05:07', 'Feel so good', '2'),\
    ('Dancing', '2022:06:10', 'More to go', '19'),\
    ('Run', '2021:07:03', 'Let's go', '0'),\
    ('Dancing', '2022:10:01', 'More to go', '6'),\
    ('Meditate', '2022:07:01', 'More to go', '7'),\
    ('Dancing', '2022:07:29', 'Feel so good', '18'),\
    ('Dancing', '2022:07:22', 'Feel so good', '23'),\
    ('Dancing', '2022:01:16', 'Feel so good', '10'),\
    ('Meditate', '2021:09:18', 'More to go', '9'),\
    ('Dancing', '2021:11:06', 'More to go', '14'),\
    ('Meditate', '2022:02:21', 'More to go', '9'),\
    ('Meditate', '2022:06:10', 'More to go', '1'),\
    ('Dancing', '2022:09:11', 'More to go', '12'),\
    ('Meditate', '2022:01:28', 'I'm on a roll', '9'),\
    ('Run', '2022:11:23', 'I'm getting better everyday', '1'),\
    ('Dancing', '2021:07:22', 'Feel so good', '10'),\
    ('Dancing', '2021:05:08', 'I'm getting better everyday', '0'),\
    ('Run', '2021:04:19', 'More to go', '2'),\
    ('Dancing', '2022:07:23', 'Let's go', '16'),\
    ('Meditate', '2022:01:19', 'I'm on a roll', '5'),\
    ('Run', '2022:07:08', 'I'm getting better everyday', '0'),\
    ('Run', '2021:11:29', 'Feel so good', '0'),\
    ('Dancing', '2022:12:03', 'More to go', '23'),\
    ('Meditate', '2022:09:08', 'I'm on a roll', '0'),\
    ('Meditate', '2021:07:04', 'Let's go', '6'),\
    ('Dancing', '2021:04:11', 'Let's go', '5'),\
    ('Meditate', '2021:03:18', 'I'm on a roll', '2'),\
    ('Dancing', '2021:04:05', 'I'm on a roll', '27'),\
    ('Run', '2022:06:08', 'So happy', '2'),\
    ('Meditate', '2021:10:13', 'Let's go', '2'),\
    ('Meditate', '2022:09:03', 'I'm on a roll', '7'),\
    ('Meditate', '2022:06:19', 'So happy', '9'),\
    ('Meditate', '2022:11:03', 'Let's go', '6'),\
    ('Dancing', '2021:01:08', 'I'm getting better everyday', '7'),\
    ('Dancing', '2021:05:29', 'So happy', '11'),\
    ('Meditate', '2021:08:07', 'Feel so good', '6'),\
    ('Meditate', '2021:11:18', 'I'm on a roll', '4'),\
    ('Dancing', '2022:08:02', 'I'm getting better everyday', '26'),\
    ('Meditate', '2022:10:30', 'Let's go', '1'),\
    ('Meditate', '2022:03:01', 'So happy', '1'),\
    ('Run', '2022:02:09', 'I'm getting better everyday', '0'),\
    ('Meditate', '2022:09:25', 'Let's go', '7'),\
    ('Dancing', '2021:10:10', 'I'm on a roll', '17'),\
    ('Dancing', '2022:04:01', 'I'm on a roll', '28'),\
    ('Run', '2021:03:05', 'Let's go', '2'),\
    ('Dancing', '2022:09:02', 'Let's go', '23'),\
    ('Run', '2022:05:05', 'More to go', '2'),\
    ('Run', '2021:09:20', 'I'm getting better everyday', '0'),\
    ('Run', '2021:06:17', 'More to go', '1'),\
    ('Meditate', '2022:06:04', 'More to go', '4'),\
    ('Run', '2022:10:31', 'So happy', '2'),\
    ('Meditate', '2022:03:24', 'I'm getting better everyday', '7'),\
    ('Meditate', '2021:02:12', 'So happy', '1'),\
    ('Dancing', '2022:12:01', 'Let's go', '19'),\
    ('Dancing', '2021:02:28', 'So happy', '24'),\
    ('Dancing', '2022:10:19', 'I'm getting better everyday', '24'),\
    ('Run', '2021:04:16', 'So happy', '0'),\
    ('Dancing', '2022:11:10', 'Let's go', '22'),\
    ('Dancing', '2021:06:05', 'I'm on a roll', '16'),\
    ('Run', '2022:06:29', 'More to go', '1'),\
    ('Meditate', '2021:11:10', 'So happy', '2'),\
    ('Meditate', '2022:05:27', 'I'm getting better everyday', '4'),\
    ('Meditate', '2022:05:15', 'Let's go', '10'),\
    ('Dancing', '2022:09:10', 'More to go', '9'),\
    ('Run', '2022:06:05', 'Let's go', '1'),\
    ('Meditate', '2022:12:07', 'So happy', '7'),\
    ('Run', '2023:01:05', 'I'm on a roll', '1'),\
    ('Run', '2021:08:26', 'Let's go', '2'),\
    ('Dancing', '2021:09:12', 'More to go', '16'),\
    ('Run', '2021:08:15', 'I'm on a roll', '1'),\
    ('Dancing', '2022:01:02', 'I'm on a roll', '12'),\
    ('Dancing', '2021:10:06', 'I'm getting better everyday', '10'),\
    ('Run', '2022:12:11', 'I'm on a roll', '0'),\
    ('Meditate', '2021:10:06', 'I'm getting better everyday', '10'),\
    ('Meditate', '2021:10:18', 'More to go', '9'),\
    ('Dancing', '2021:11:17', 'Feel so good', '18'),\
    ('Dancing', '2022:09:03', 'Let's go', '0'),\
    ('Meditate', '2022:02:14', 'Feel so good', '5'),\
    ('Meditate', '2022:05:19', 'I'm on a roll', '8'),\
    ('Dancing', '2021:01:20', 'More to go', '21'),\
    ('Dancing', '2022:02:13', 'So happy', '1'),\
    ('Meditate', '2021:04:06', 'Feel so good', '7'),\
    ('Meditate', '2022:08:22', 'Feel so good', '0'),\
    ('Run', '2022:05:22', 'So happy', '2'),\
    ('Run', '2021:08:19', 'I'm on a roll', '2'),\
    ('Run', '2023:01:07', 'So happy', '2'),\
    ('Dancing', '2022:06:27', 'More to go', '23'),\
    ('Run', '2022:08:16', 'Let's go', '2'),\
    ('Meditate', '2022:02:03', 'I'm on a roll', '6'),\
    ('Dancing', '2021:03:27', 'Let's go', '15'),\
    ('Dancing', '2021:03:29', 'I'm on a roll', '25'),\
    ('Run', '2021:07:11', 'Feel so good', '1'),\
    ('Run', '2022:08:18', 'More to go', '0'),\
    ('Dancing', '2021:03:01', 'Let's go', '4'),\
    ('Meditate', '2021:12:27', 'I'm on a roll', '4'),\
    ('Dancing', '2021:05:14', 'I'm on a roll', '25'),\
    ('Dancing', '2021:01:12', 'I'm on a roll', '11'),\
    ('Run', '2022:10:16', 'More to go', '1'),\
    ('Dancing', '2022:08:16', 'So happy', '6'),\
    ('Run', '2021:02:08', 'Feel so good', '2'),\
    ('Meditate', '2021:02:07', 'More to go', '4'),\
    ('Dancing', '2022:03:04', 'I'm on a roll', '12'),\
    ('Dancing', '2023:01:07', 'So happy', '2'),\
    ('Dancing', '2021:08:04', 'More to go', '2'),\
    ('Dancing', '2022:11:08', 'So happy', '28'),\
    ('Run', '2021:07:07', 'I'm getting better everyday', '2'),\
    ('Meditate', '2021:03:27', 'So happy', '7'),\
    ('Dancing', '2021:11:02', 'I'm getting better everyday', '5'),\
    ('Dancing', '2022:04:27', 'So happy', '0'),\
    ('Run', '2022:07:23', 'More to go', '0'),\
    ('Meditate', '2022:02:17', 'I'm on a roll', '6'),\
    ('Meditate', '2021:08:22', 'Feel so good', '4'),\
    ('Meditate', '2021:07:31', 'More to go', '2'),\
    ('Meditate', '2022:12:27', 'I'm on a roll', '0'),\
    ('Meditate', '2022:02:13', 'Let's go', '4'),\
    ('Meditate', '2021:06:28', 'Let's go', '6'),\
    ('Dancing', '2022:04:09', 'Feel so good', '0'),\
    ('Dancing', '2022:11:24', 'So happy', '30'),\
    ('Meditate', '2022:11:13', 'Feel so good', '4'),\
    ('Dancing', '2022:08:29', 'Feel so good', '22'),\
    ('Meditate', '2022:10:12', 'Feel so good', '6'),\
    ('Meditate', '2022:02:23', 'I'm on a roll', '6'),\
    ('Meditate', '2021:07:26', 'More to go', '0'),\
    ('Run', '2022:03:28', 'Let's go', '0'),\
    ('Run', '2022:05:16', 'So happy', '0'),\
    ('Run', '2021:07:29', 'Feel so good', '0'),\
    ('Meditate', '2021:12:25', 'More to go', '4'),\
    ('Dancing', '2022:02:14', 'So happy', '24'),\
    ('Run', '2021:10:06', 'Let's go', '2'),\
    ('Run', '2021:10:16', 'Feel so good', '1'),\
    ('Dancing', '2022:05:15', 'So happy', '3'),\
    ('Run', '2021:09:13', 'More to go', '0'),\
    ('Run', '2021:06:09', 'I'm getting better everyday', '1'),\
    ('Dancing', '2022:06:12', 'I'm on a roll', '14'),\
    ('Dancing', '2021:06:30', 'Let's go', '29'),\
    ('Dancing', '2022:07:08', 'More to go', '15'),\
    ('Meditate', '2021:12:15', 'So happy', '9'),\
    ('Run', '2021:01:05', 'So happy', '0'),\
    ('Dancing', '2021:02:20', 'I'm getting better everyday', '26'),\
    ('Run', '2022:07:24', 'Let's go', '0'),\
    ('Meditate', '2023:01:12', 'Feel so good', '1'),\
    ('Dancing', '2022:04:13', 'More to go', '20'),\
    ('Run', '2021:11:05', 'More to go', '2'),\
    ('Dancing', '2022:06:01', 'Let's go', '21'),\
    ('Meditate', '2022:12:14', 'Let's go', '3'),\
    ('Run', '2022:03:09', 'I'm on a roll', '0'),\
    ('Dancing', '2021:11:10', 'Feel so good', '10'),\
    ('Run', '2021:06:02', 'Let's go', '1'),\
    ('Meditate', '2023:01:07', 'I'm getting better everyday', '5'),\
    ('Meditate', '2021:01:26', 'Feel so good', '6'),\
    ('Dancing', '2021:04:01', 'So happy', '10'),\
    ('Meditate', '2022:12:06', 'I'm getting better everyday', '8'),\
    ('Dancing', '2021:05:26', 'So happy', '2'),\
    ('Meditate', '2021:02:21', 'Let's go', '3'),\
    ('Run', '2021:11:13', 'So happy', '2'),\
    ('Run', '2022:04:04', 'Feel so good', '2'),\
    ('Dancing', '2021:02:02', 'Let's go', '11'),\
    ('Run', '2021:10:18', 'Feel so good', '2'),\
    ('Meditate', '2022:04:14', 'Feel so good', '4'),\
    ('Dancing', '2021:12:10', 'Feel so good', '6'),\
    ('Dancing', '2021:06:19', 'Let's go', '24'),\
    ('Meditate', '2021:02:04', 'More to go', '8'),\
    ('Meditate', '2022:09:22', 'I'm getting better everyday', '4'),\
    ('Dancing', '2022:01:03', 'I'm on a roll', '21'),\
    ('Run', '2022:09:03', 'Let's go', '2'),\
    ('Meditate', '2022:10:07', 'I'm getting better everyday', '8'),\
    ('Dancing', '2021:09:04', 'So happy', '26'),\
    ('Dancing', '2022:04:28', 'I'm on a roll', '24'),\
    ('Dancing', '2021:10:09', 'I'm getting better everyday', '30'),\
    ('Dancing', '2022:05:20', 'I'm getting better everyday', '3'),\
    ('Meditate', '2021:06:20', 'I'm on a roll', '6'),\
    ('Run', '2022:07:29', 'More to go', '1'),\
    ('Run', '2021:08:01', 'More to go', '0'),\
    ('Meditate', '2022:03:23', 'I'm on a roll', '1'),\
    ('Run', '2022:03:17', 'So happy', '0'),\
    ('Run', '2021:06:18', 'I'm on a roll', '2'),\
    ('Run', '2022:07:16', 'I'm getting better everyday', '1'),\
    ('Dancing', '2021:07:15', 'So happy', '25'),\
    ('Dancing', '2021:11:23', 'I'm getting better everyday', '25'),\
    ('Meditate', '2021:08:30', 'More to go', '9'),\
    ('Run', '2022:05:31', 'So happy', '2'),\
    ('Meditate', '2022:11:04', 'More to go', '0'),\
    ('Dancing', '2021:03:21', 'More to go', '27'),\
    ('Meditate', '2022:03:08', 'Feel so good', '2'),\
    ('Meditate', '2022:10:15', 'So happy', '0'),\
    ('Meditate', '2021:03:28', 'I'm on a roll', '0'),\
    ('Run', '2021:05:14', 'More to go', '1'),\
    ('Meditate', '2022:08:24', 'Let's go', '7'),\
    ('Dancing', '2021:12:14', 'Feel so good', '16'),\
    ('Dancing', '2022:03:08', 'Feel so good', '8'),\
    ('Meditate', '2022:07:12', 'Let's go', '5'),\
    ('Dancing', '2021:02:22', 'So happy', '4'),\
    ('Dancing', '2022:08:12', 'I'm on a roll', '24'),\
    ('Meditate', '2023:01:06', 'Feel so good', '1'),\
    ('Dancing', '2022:06:15', 'I'm getting better everyday', '11'),\
    ('Dancing', '2021:04:23', 'More to go', '18'),\
    ('Run', '2022:10:17', 'Feel so good', '1'),\
    ('Meditate', '2021:03:13', 'I'm on a roll', '8'),\
    ('Run', '2022:01:08', 'I'm on a roll', '0'),\
    ('Dancing', '2021:12:21', 'Feel so good', '15'),\
    ('Dancing', '2021:09:07', 'Feel so good', '29'),\
    ('Dancing', '2021:07:08', 'I'm on a roll', '9'),\
    ('Dancing', '2022:08:30', 'I'm on a roll', '22'),\
    ('Meditate', '2021:09:07', 'I'm getting better everyday', '1'),\
    ('Meditate', '2021:06:30', 'I'm getting better everyday', '10'),\
    ('Meditate', '2022:01:18', 'Let's go', '1'),\
    ('Run', '2022:04:07', 'Let's go', '0'),\
    ('Meditate', '2022:04:11', 'Let's go', '2'),\
    ('Dancing', '2022:07:06', 'I'm getting better everyday', '17'),\
    ('Run', '2022:02:14', 'Let's go', '1'),\
    ('Dancing', '2021:07:13', 'So happy', '3'),\
    ('Run', '2022:08:27', 'Feel so good', '0'),\
    ('Meditate', '2022:01:03', 'I'm getting better everyday', '2'),\
    ('Run', '2021:04:30', 'More to go', '1'),\
    ('Meditate', '2022:06:13', 'I'm on a roll', '10'),\
    ('Meditate', '2021:07:10', 'Let's go', '4'),\
    ('Run', '2022:06:01', 'So happy', '1'),\
    ('Dancing', '2021:01:28', 'I'm on a roll', '18'),\
    ('Meditate', '2021:04:04', 'I'm getting better everyday', '3'),\
    ('Run', '2021:10:23', 'Feel so good', '1'),\
    ('Dancing', '2022:10:30', 'I'm getting better everyday', '11'),\
    ('Meditate', '2021:01:11', 'I'm on a roll', '1'),\
    ('Meditate', '2022:05:11', 'I'm getting better everyday', '1'),\
    ('Dancing', '2021:08:26', 'So happy', '1'),\
    ('Run', '2021:11:12', 'Feel so good', '1'),\
    ('Meditate', '2021:04:05', 'I'm getting better everyday', '8'),\
    ('Dancing', '2021:02:08', 'I'm getting better everyday', '12'),\
    ('Dancing', '2022:06:25', 'More to go', '9'),\
    ('Run', '2022:12:10', 'I'm getting better everyday', '1')"

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
    ('Productivity')\
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
    ('Run', 1),\
    ('Meditate', 3),\
    ('Dancing', 1)"