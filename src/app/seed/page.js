"use client";
import React, { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const listings = [
    { "property": { "name": "Lakeside Villa", "type": "House", "sqft": 2500, "price": 800000, "beds": 4, "bathrooms": 3 }, "contact": { "phone": "9876543210" }, "location": { "address": "123 Lakeview Drive", "city": "Springfield", "state": "IL", "zip": "62704" } },
    { "property": { "name": "Sunset Cottage", "type": "House", "sqft": 1800, "price": 650000, "beds": 3, "bathrooms": 2 }, "contact": { "phone": "6543219870" }, "location": { "address": "789 Sunset Blvd", "city": "Sunnyvale", "state": "CA", "zip": "94085" } },
    { "property": { "name": "Mountain Retreat", "type": "House", "sqft": 2200, "price": 720000, "beds": 3, "bathrooms": 2.5 }, "contact": { "phone": "7894561230" }, "location": { "address": "456 Mountain Road", "city": "Boulder", "state": "CO", "zip": "80301" } },
    { "property": { "name": "City Loft", "type": "Apartment", "sqft": 1500, "price": 550000, "beds": 2, "bathrooms": 2 }, "contact": { "phone": "3216549870" }, "location": { "address": "101 Downtown Ave", "city": "New York", "state": "NY", "zip": "10001" } },
    { "property": { "name": "Beach House", "type": "House", "sqft": 3000, "price": 1200000, "beds": 5, "bathrooms": 4 }, "contact": { "phone": "4567891230" }, "location": { "address": "123 Ocean Drive", "city": "Miami", "state": "FL", "zip": "33101" } },
    { "property": { "name": "Country Home", "type": "House", "sqft": 2400, "price": 780000, "beds": 4, "bathrooms": 3 }, "contact": { "phone": "7891234560" }, "location": { "address": "789 Country Lane", "city": "Nashville", "state": "TN", "zip": "37201" } },
    { "property": { "name": "Urban Condo", "type": "Condo", "sqft": 1300, "price": 500000, "beds": 2, "bathrooms": 2 }, "contact": { "phone": "1239876540" }, "location": { "address": "456 City Center", "city": "Chicago", "state": "IL", "zip": "60601" } },
    { "property": { "name": "Suburban Ranch", "type": "House", "sqft": 2100, "price": 700000, "beds": 3, "bathrooms": 2.5 }, "contact": { "phone": "6547893210" }, "location": { "address": "321 Suburbia Way", "city": "Plano", "state": "TX", "zip": "75024" } },
    { "property": { "name": "Modern Estate", "type": "House", "sqft": 3500, "price": 1500000, "beds": 6, "bathrooms": 5 }, "contact": { "phone": "4561237890" }, "location": { "address": "101 Luxury Lane", "city": "Beverly Hills", "state": "CA", "zip": "90210" } },
    { "property": { "name": "Rustic Cabin", "type": "House", "sqft": 1600, "price": 450000, "beds": 2, "bathrooms": 1 }, "contact": { "phone": "3217894560" }, "location": { "address": "789 Forest Road", "city": "Asheville", "state": "NC", "zip": "28801" } }
];

const createPost = async (listing) => {
    const response = await fetch('http://localhost:3000/api/properties', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `users API-Key d27a8b28-e035-46d5-9185-add63eb82a0e`,
        },
        body: JSON.stringify(listing),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

const Seed = () => {
    // const mutation = useMutation({
    //     mutationFn: createPost
    // })

    // useEffect(() => {
    //     const seed = async () => {
    //         try {
    //             await Promise.all(listings.map(listing => mutation.mutateAsync(listing)));
    //         } catch (error) {
    //             console.error('Error creating posts:', error);
    //         }
    //     };
    //     seed();
    // }, []);

    return (
        <div>page</div>
    );
};

export default Seed;
