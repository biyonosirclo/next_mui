import CardMeals from '@/components/card/card_meals';
import PageMeals from '@/components/skeleton/page_meals';
import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

function Meals() {
    const [meals, setMeals] = useState([]);
    const [loading, SetLoading] = useState(false);


    const fetchData = async () => {
        SetLoading(true);
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await res.json();
        setMeals(data.categories);
        setTimeout(() => {
            SetLoading(false);
        }, 3000)
    }

    useEffect(() => {
        fetchData();
    }, []);
    if (loading) {
        return (
            <>
                <PageMeals />
            </>
        )
    }
    return (

        <div>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    {
                        meals && meals.map((item, key) => (
                            <Grid item xs={6} md={4} lg={3} key={key}>
                                <CardMeals title={item.strCategory} images={item.strCategoryThumb} desc={item.strCategoryDescription} />
                            </Grid>

                        ))
                    }

                </Grid>
            </Container>
        </div>
    )
}

export default Meals