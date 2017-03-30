import React, { Component } from 'react';

import Background from './components/Background/Background';
import BackgroundUpload from './components/BackgroundUpload';
import CustomGradient from './components/CustomGradient';
import TitleCategori from '../TitleCategorie';

export default class Backgrounds extends Component{
    render (){
        return (
            <div className="nav-element backgrounds">
                <h2 className="title-catagories">Backgrounds</h2>
                <ul className="catagories">
                    <BackgroundUpload active='active' link="img/icons/upload.png">Upload</BackgroundUpload>
                    {
                        this.props.listCategories.map(function(catagorie, i){
                            var items = catagorie.items.map(function(item, f){
                                var background = [];
                                if(catagorie.name == 'Gradients' && f == 0){
                                    background.push(<CustomGradient />);
                                }
                                background.push(<Background key={f} link={item}/>);
                                return background;
                            });
                            return (
                                <li key={i} className="catagorie">
                                    <TitleCategori link={catagorie.iconCat}>{catagorie.name}</TitleCategori>
                                    <ul className="items">{items}</ul>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}