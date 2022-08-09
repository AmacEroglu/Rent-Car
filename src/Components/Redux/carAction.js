const initialState = { 
    type: 'CHANGE_SITUATION',
    payload: {
        cars: Id1,
        name: 'Ford',
        model: 'Mustang',
        year: 1969,
        situation: 'Kiralık',
        comments: [
            {
                commentId: 1,
                comment: 'Expensive car',
                date: new Date(2022, 1, 27)
            },
            {
                commentId: 2,
                comment: 'So fast',
                date: new Date(2022, 3, 12)
            }
        ],

        cars: Id2,
        name: 'Ferrari',
        model: 'Enzo',
        year: 2022,
        situation: 'Parkta',
        comments: [
            {
                commentId: 3,
                comment: 'Beauty',
                date: new Date(2022, 1, 27)
            },
            {
                commentId: 4,
                comment: 'Love it',
                date: new Date(2022, 3, 12)
            }
        ]

    }
};

export default carAction;