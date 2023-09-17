const express = require('express');
const app = express();
app.use(express.json());
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const users = [
  { id: 1, name: 'Иркеналиев Алиби', login: 'user1' },
  { id: 2, name: 'Иванов Иван', login: 'user2' },
  { id: 3, name: 'Петров Василий', login: 'user3' },
  { id: 4, name: 'Волков Дмитрий', login: 'user4' },
];

const transactions = [
    { id: 1, userId: 1, amount: '100', date: '2023-01-01' },
    { id: 2, userId: 2, amount: 50, date: '2023-01-02' },
    { id: 3, userId: 3, amount: -200, date: '2023-01-03' },
    { id: 4, userId: 4, amount: -75, date: '2023-01-01' },
    { id: 5, userId: 1, amount: -50, date: '2023-01-02' },
    { id: 6, userId: 2, amount: 25, date: '2023-01-03' },
    { id: 7, userId: 3, amount: 150, date: '2023-01-01' },
    { id: 8, userId: 4, amount: 125, date: '2023-01-02' },
    { id: 9, userId: 1, amount: -75, date: '2023-01-03' },
    { id: 10, userId: 2, amount: -10, date: '2023-01-01' },
    { id: 11, userId: 3, amount: -90, date: '2023-01-02' },
    { id: 12, userId: 4, amount: 30, date: '2023-01-03' },
    { id: 13, userId: 1, amount: 120, date: '2023-01-01' },
    { id: 14, userId: 2, amount: -60, date: '2023-01-02' },
    { id: 15, userId: 3, amount: -75, date: '2023-01-03' },
    { id: 16, userId: 4, amount: 45, date: '2023-01-01' },
    { id: 17, userId: 1, amount: 60, date: '2023-01-02' },
    { id: 18, userId: 2, amount: 15, date: '2023-01-03' },
    { id: 19, userId: 3, amount: -110, date: '2023-01-01' },
    { id: 20, userId: 4, amount: -35, date: '2023-01-02' },
    { id: 21, userId: 1, amount: -130, date: '2023-01-03' },
    { id: 22, userId: 2, amount: -70, date: '2023-01-01' },
    { id: 23, userId: 3, amount: 80, date: '2023-01-02' },
    { id: 24, userId: 4, amount: 40, date: '2023-01-03' },
    { id: 25, userId: 1, amount: -110, date: '2023-01-01' },
    { id: 26, userId: 2, amount: 55, date: '2023-01-02' },
    { id: 27, userId: 3, amount: -70, date: '2023-01-03' },
    { id: 28, userId: 4, amount: 50, date: '2023-01-01' },
    { id: 29, userId: 1, amount: -140, date: '2023-01-02' },
    { id: 30, userId: 2, amount: -80, date: '2023-01-03' },
    { id: 31, userId: 3, amount: -60, date: '2023-01-01' },
    { id: 32, userId: 4, amount: 60, date: '2023-01-02' },
    { id: 33, userId: 1, amount: 90, date: '2023-01-03' },
    { id: 34, userId: 2, amount: 35, date: '2023-01-01' },
    { id: 35, userId: 3, amount: 120, date: '2023-01-02' },
    { id: 36, userId: 4, amount: 25, date: '2023-01-03' },
    { id: 37, userId: 1, amount: 150, date: '2023-01-01' },
    { id: 38, userId: 2, amount: -45, date: '2023-01-02' },
    { id: 39, userId: 3, amount: -100, date: '2023-01-03' },
    { id: 40, userId: 4, amount: 70, date: '2023-01-01' },
    { id: 41, userId: 1, amount: 80, date: '2023-01-02' },
    { id: 42, userId: 2, amount: -20, date: '2023-01-03' },
    { id: 43, userId: 3, amount: 500, date: '2023-01-01' },
    { id: 44, userId: 4, amount: -90, date: '2023-01-02' },
    { id: 45, userId: 1, amount: 100, date: '2023-01-03' },
    { id: 46, userId: 2, amount: -40, date: '2023-01-01' },
    { id: 47, userId: 3, amount: 30, date: '2023-01-02' },
    { id: 48, userId: 4, amount: -80, date: '2023-01-03' },
    { id: 49, userId: 1, amount: 110, date: '2023-01-01' },
    { id: 50, userId: 2, amount: -10, date: '2023-01-02' },
];
 
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/user/:id/transactions/:date', (req, res) => {
    const userId = parseInt(req.params.id);
    const date = req.params.date;
    const transactions = [
        { id: 1, userId: 1, amount: '100', date: '2023-01-01' },
        { id: 2, userId: 2, amount: 50, date: '2023-01-02' },
        { id: 3, userId: 3, amount: -200, date: '2023-01-03' },
        { id: 4, userId: 4, amount: -75, date: '2023-01-01' },
        { id: 5, userId: 1, amount: -50, date: '2023-01-02' },
        { id: 6, userId: 2, amount: 25, date: '2023-01-03' },
        { id: 7, userId: 3, amount: 150, date: '2023-01-01' },
        { id: 8, userId: 4, amount: 125, date: '2023-01-02' },
        { id: 9, userId: 1, amount: -75, date: '2023-01-03' },
        { id: 10, userId: 2, amount: -10, date: '2023-01-01' },
        { id: 11, userId: 3, amount: -90, date: '2023-01-02' },
        { id: 12, userId: 4, amount: 30, date: '2023-01-03' },
        { id: 13, userId: 1, amount: 120, date: '2023-01-01' },
        { id: 14, userId: 2, amount: -60, date: '2023-01-02' },
        { id: 15, userId: 3, amount: -75, date: '2023-01-03' },
        { id: 16, userId: 4, amount: 45, date: '2023-01-01' },
        { id: 17, userId: 1, amount: 60, date: '2023-01-02' },
        { id: 18, userId: 2, amount: 15, date: '2023-01-03' },
        { id: 19, userId: 3, amount: -110, date: '2023-01-01' },
        { id: 20, userId: 4, amount: -35, date: '2023-01-02' },
        { id: 21, userId: 1, amount: -130, date: '2023-01-03' },
        { id: 22, userId: 2, amount: -70, date: '2023-01-01' },
        { id: 23, userId: 3, amount: 80, date: '2023-01-02' },
        { id: 24, userId: 4, amount: 40, date: '2023-01-03' },
        { id: 25, userId: 1, amount: -110, date: '2023-01-01' },
        { id: 26, userId: 2, amount: 55, date: '2023-01-02' },
        { id: 27, userId: 3, amount: -70, date: '2023-01-03' },
        { id: 28, userId: 4, amount: 50, date: '2023-01-01' },
        { id: 29, userId: 1, amount: -140, date: '2023-01-02' },
        { id: 30, userId: 2, amount: -80, date: '2023-01-03' },
        { id: 31, userId: 3, amount: -60, date: '2023-01-01' },
        { id: 32, userId: 4, amount: 60, date: '2023-01-02' },
        { id: 33, userId: 1, amount: 90, date: '2023-01-03' },
        { id: 34, userId: 2, amount: 35, date: '2023-01-01' },
        { id: 35, userId: 3, amount: 120, date: '2023-01-02' },
        { id: 36, userId: 4, amount: 25, date: '2023-01-03' },
        { id: 37, userId: 1, amount: 150, date: '2023-01-01' },
        { id: 38, userId: 2, amount: -45, date: '2023-01-02' },
        { id: 39, userId: 3, amount: -100, date: '2023-01-03' },
        { id: 40, userId: 4, amount: 70, date: '2023-01-01' },
        { id: 41, userId: 1, amount: 80, date: '2023-01-02' },
        { id: 42, userId: 2, amount: -20, date: '2023-01-03' },
        { id: 43, userId: 3, amount: 500, date: '2023-01-01' },
        { id: 44, userId: 4, amount: -90, date: '2023-01-02' },
        { id: 45, userId: 1, amount: 100, date: '2023-01-03' },
        { id: 46, userId: 2, amount: -40, date: '2023-01-01' },
        { id: 47, userId: 3, amount: 30, date: '2023-01-02' },
        { id: 48, userId: 4, amount: -80, date: '2023-01-03' },
        { id: 49, userId: 1, amount: 110, date: '2023-01-01' },
        { id: 50, userId: 2, amount: -10, date: '2023-01-02' },
    ];
    const userTransactions = transactions.filter((transaction) => {
      return transaction.userId === userId && transaction.date === date;
    });
    
    res.render('table',{user: userId, trs:userTransactions});
});
app.get('/login/:login', (req, res) => {
    const { login } = req.params;
    const user = users.find((user) => user.login === login);

    if (!user) {
        return res.status(404).json({ message: 'Пользователь с таким логином не найден' });
    }
    res.render('profile', {user});
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});