import React from 'react'
import RecipeList from '../Component/RecipeList'
let recipes = []
export default function Home() {
    return (
        <main>
            <div className="flex-row justify-space-between">
                <div className={`col-12 mb-3  'col-lg-8'`}>

                    <RecipeList recipes={recipes} title="aksdsd" />

                </div>
            </div>
        </main>
    )
}
