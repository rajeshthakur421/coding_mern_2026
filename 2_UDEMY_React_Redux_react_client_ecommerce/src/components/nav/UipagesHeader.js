import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    header: {
        background: '#2874f0',
        height: 55,
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic',
    },
    plusImage: {
        width: 10,
        height: 10,
        marginLeft: 4,
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    customButtonWrapper: {
        margin: '0 5% 0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));

const UipagesHeader = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    {/* <CustomButtons /> */}
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" className={classes.header}>
            <Toolbar style={{ minHeight: 55 }}>
                <IconButton
                    color="inherit"
                    onClick={handleOpen}
                    className={classes.menuButton}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Link to='/' className={classes.component}>
                    <img src={logoURL} style={{ width: 75 }} alt="" />
                    <Box component="span" style={{ display: 'flex' }}>
                        <Typography className={classes.subHeading}>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </Typography>
                        <img src={subURL} className={classes.plusImage} alt="" />
                    </Box>
                </Link>
                {/* <Search /> */}
                <span className={classes.customButtonWrapper}>
                    {/* <CustomButtons /> */}
                </span>
            </Toolbar>
        </AppBar>
    );
};

export default UipagesHeader;
