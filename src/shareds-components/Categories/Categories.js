import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    FormControlLabel:{
        marginTop: '0',
        marginBottom: '0'
    }
}));

const Categories = ({getCategory, ...props}) => {

    const classes = useStyles();
    // const [state, setState] = React.useState(s=>{
    //     return {
    //         phone: false,
    //         tvs: false,
    //         computers: false,
    //         electronics: false,
    //         cars_trucks: false,
    //         motorcycle: false,
    //         jewelry: false,
    //         real_states: false,
    //         bikes: false,
    //         toys_games: false,
    //         tools: false,
    //         clothes_accessories: false,
    //         heavy_equip: false,
    //         antiques: false,
    //         aviation: false,
    //         boats: false,
    //     }
    // });

    const handleChange = (event) => {
        // setState({ ...state, [event.target.name]: event.target.checked });
        getCategory(event.target.value);
        setValue(event.target.value);
    };

    const [value, setValue] = React.useState('');

    // const handleChange = (event) => {
    // };

    // const {
    //     electronics, 
    //     cars_trucks, 
    //     phone, 
    //     gilad, 
    //     tvs, 
    //     computers, 
    //     motorcycle, 
    //     jewelry, 
    //     real_states, 
    //     bikes, 
    //     toys_games,                 
        
    //     tools, 
    //     clothes_accessories, 
    //     heavy_equip, 
    //     antiques, 
    //     aviation, 
    //     boats 
    // } = state;


    // const error = [
    //         electronics, 
    //         cars_trucks, 
    //         phone, 
    //         tvs, 
    //         computers, 
    //         motorcycle, 
    //         jewelry, 
    //         real_states, 
    //         bikes, 
    //         toys_games, 

    //         tools, 
    //         clothes_accessories, 
    //         heavy_equip, 
    //         antiques,
    //         aviation, 
    //         boats
    //     ].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            {/* <FormControl required  error={error} component="fieldset" className={classes.formControl}> */}
            <FormControl required component="fieldset" className={classes.formControl}>
                <FormLabel className="text-red" component="legend">Categories</FormLabel>
                <RadioGroup aria-label="categories" name="category" value={value} onChange={handleChange}>
                    <FormControlLabel 
                        value="phone" 
                        control={<Radio />} 
                        label="Phones/Tablets" 
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        value="tvs" 
                        control={<Radio />}
                        label="Television (TV)"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="computers"
                        label="Computers"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="electronics"
                        label="Electronic's"
                        // label="Gilad Gray"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="cars_trucks"
                        label="Car/Trucks"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="motorcycle"
                        label="Motorcyrcle"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio/>} 
                        value="jewelry"
                        label="Jewelry"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="real_states"
                        label="Real state"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="bikes"
                        label="Bikes"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="toys_games"
                        label="Toys/Games"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="tools"
                        label="Tools"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="clothes_accessories"
                        label="clothes/acc"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="heavy_equip"
                        label="Heavy equip"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="antiques"
                        label="Antiques"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="aviation"
                        label="Aviation"
                    />
                    <FormControlLabel 
                        className={classes.FormControlLabel}
                        control={<Radio />}
                        value="boats"
                        label="Boats"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Categories;


/*
    <FormGroup>
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={phone} onChange={handleChange} name="phone" />}
            label="Phones/Tablets"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={tvs} onChange={handleChange} name="tvs" />}
            label="Television (TV)"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={computers} onChange={handleChange} name="computers" />}
            label="Computers"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={electronics} onChange={handleChange} name="electronics" />}
            label="Electronic's"
            // label="Gilad Gray"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={cars_trucks} onChange={handleChange} name="cars_trucks" />}
            label="Car/Trucks"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={motorcycle} onChange={handleChange} name="motorcycle" />}
            label="Motorcyrcle"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={jewelry} onChange={handleChange} name="jewelry" />}
            label="Jewelry"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={real_states} onChange={handleChange} name="real_states" />}
            label="Real state"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={bikes} onChange={handleChange} name="bikes" />}
            label="Bikes"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={toys_games} onChange={handleChange} name="toys_games" />}
            label="Toys/Games"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={tools} onChange={handleChange} name="tools" />}
            label="Tools"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={clothes_accessories} onChange={handleChange} name="clothes_accessories" />}
            label="clothes/acc"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={heavy_equip} onChange={handleChange} name="heavy_equip" />}
            label="Heavy equip"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={antiques} onChange={handleChange} name="antiques" />}
            label="Antiques"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={aviation} onChange={handleChange} name="aviation" />}
            label="Aviation"
        />
        <FormControlLabel className={classes.FormControlLabel}
            control={<Checkbox checked={boats} onChange={handleChange} name="boats" />}
            label="Boats"
        />
    </FormGroup>


*/
/*
<select aria-describedby="searchDropdownDescription" class="nav-search-dropdown searchSelect" data-nav-digest="uh7RP4mnmG2cQLRYyE5+xsOTfGI=" data-nav-selected="0" id="searchDropdownBox" name="url" style="display: block; top: 2.5px;" tabindex="18" title="Search in">
        <option selected="selected" value="search-alias=aps">All Departments</option>
        <option value="search-alias=audible">Audible Books &amp; Originals</option>
        <option value="search-alias=alexa-skills">Alexa Skills</option>
        <option value="search-alias=amazon-devices">Amazon Devices</option>
        <option value="search-alias=warehouse-deals">Amazon Warehouse</option>
        <option value="search-alias=appliances">Appliances</option>
        <option value="search-alias=mobile-apps">Apps &amp; Games</option>
        <option value="search-alias=arts-crafts">Arts, Crafts &amp; Sewing</option>
        <option value="search-alias=automotive">Automotive Parts &amp; Accessories</option>
        <option value="search-alias=baby-products">Baby</option>
        <option value="search-alias=beauty">Beauty &amp; Personal Care</option>
        <option value="search-alias=stripbooks">Books</option>
        <option value="search-alias=popular">CDs &amp; Vinyl</option>
        <option value="search-alias=mobile">Cell Phones &amp; Accessories</option>
        <option value="search-alias=fashion">Clothing, Shoes &amp; Jewelry</option>
        <option value="search-alias=fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
        <option value="search-alias=fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
        <option value="search-alias=fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
        <option value="search-alias=fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
        <option value="search-alias=fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
        <option value="search-alias=under-ten-dollars">	Under $10</option>
        <option value="search-alias=pantry">Amazon Pantry</option>
        <option value="search-alias=collectibles">Collectibles &amp; Fine Art</option>
        <option value="search-alias=computers">Computers</option>
        <option value="search-alias=courses">Courses</option>
        <option value="search-alias=financial">Credit and Payment Cards</option>
        <option value="search-alias=edu-alt-content">Digital Educational Resources</option>
        <option value="search-alias=digital-music">Digital Music</option>
        <option value="search-alias=electronics">Electronics</option>
        <option value="search-alias=lawngarden">Garden &amp; Outdoor</option>
        <option value="search-alias=gift-cards">Gift Cards</option>
        <option value="search-alias=grocery">Grocery &amp; Gourmet Food</option>
        <option value="search-alias=handmade">Handmade</option>
        <option value="search-alias=hpc">Health, Household &amp; Baby Care</option>
        <option value="search-alias=local-services">Home &amp; Business Services</option>
        <option value="search-alias=garden">Home &amp; Kitchen</option>
        <option value="search-alias=industrial">Industrial &amp; Scientific</option>
        <option value="search-alias=prime-exclusive">Just for Prime</option>
        <option value="search-alias=digital-text">Kindle Store</option>
        <option value="search-alias=fashion-luggage">Luggage &amp; Travel Gear</option>
        <option value="search-alias=magazines">Magazine Subscriptions</option>
        <option value="search-alias=movies-tv">Movies &amp; TV</option>
        <option value="search-alias=mi">Musical Instruments</option>
        <option value="search-alias=office-products">Office Products</option>
        <option value="search-alias=pets">Pet Supplies</option>
        <option value="search-alias=luxury-beauty">Premium Beauty</option>
        <option value="search-alias=instant-video">Prime Video</option>
        <option value="search-alias=smart-home">Smart Home</option>
        <option value="search-alias=software">Software</option>
        <option value="search-alias=sporting">Sports &amp; Outdoors</option>
        <option value="search-alias=subscribe-with-amazon">Subscription Boxes</option>
        <option value="search-alias=tools">Tools &amp; Home Improvement</option>
        <option value="search-alias=toys-and-games">Toys &amp; Games</option>
        <option value="search-alias=vehicles">Vehicles</option>
        <option value="search-alias=videogames">Video Games</option>
        <option value="search-alias=wholefoods">Whole Foods Market</option>
    </select>


*/