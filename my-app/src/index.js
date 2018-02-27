import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import Menu from 'semantic-ui-react/dist/es/collections/Menu/Menu';
import Dropdown from 'semantic-ui-react/dist/es/modules/Dropdown/Dropdown';
import Icon from 'semantic-ui-react/dist/es/elements/Icon/Icon';
import Image from 'semantic-ui-react/dist/es/elements/Image/Image';
import Grid from 'semantic-ui-react/dist/es/collections/Grid/Grid';
import List from 'semantic-ui-react/dist/es/elements/List/List';
import Input from 'semantic-ui-react/dist/es/elements/Input/Input';
import Button from 'semantic-ui-react/dist/es/elements/Button/Button';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image centered src="//cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?15691486226381689305"/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Container centered className="menu-container">
          <Grid centered columns>
            <Menu borderless centered className="midmenu">
              <Dropdown item text="MEN">
                <Dropdown.Menu>
                  <Dropdown.Item>Clothes.</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="WOMEN">
                <Dropdown.Menu>
                  <Dropdown.Item>Clothes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item name='KIDS' onClick={this.handleItemClick}/>
              <Dropdown item text="BRANDS">
                <Dropdown.Menu>
                  <Dropdown.Item>Clothes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item name='SEARCH' onClick={this.handleItemClick}/>
            </Menu>
          </Grid>
        </Container>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src='//cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?15691486226381689305' fluid/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Grid centered columns={3} className="footer-background">
          <Grid.Column>
            Navigation
            <hr/>
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Store Locations</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            MAIN MENU
            <hr/>
            <List>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            Connect
            <hr/>
            <List>
              <List.Item>Sign up for the latest updates</List.Item>
              <div>
                <Input ref={this.handleRef} placeholder='Search...'/>
                <Button content='Join' onClick={this.focus}/>
              </div>
            </List>
          </Grid.Column>
        </Grid>
    );
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
