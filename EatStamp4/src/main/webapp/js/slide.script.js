let { h, render, Component } = preact; // import {h, render, Component,} from 'preact';

/** @jsx h */
class Paginator {
  constructor(items, itemsPerPage) {
    this.items = items;
    this.itemsPerPage = itemsPerPage;
    this.page = 1;
  }

  getData()
  {
    return this.items;
  }

  getItems(current)
  {
    const lowerLimit = Math.max(0, current - (this.itemsPerPage + 1));
    const upperLimit = Math.min(this.items.length, current + this.itemsPerPage * 2 + 1);

    return this.items.slice(lowerLimit, upperLimit);
  }

  setPage(page) {
    this.page = page;

    return this;
  }

  getPage() {
    return this.page;
  }

  getPages()
  {
    return Array.apply(null, {
      length: this.getTotalPages() }).
    map(Number.call, Number); // Clever thing from StackOverfow.
  }

  getItemsPerPage()
  {
    return this.itemsPerPage;
  }

  getTotalPages()
  {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }}


const ScrollerPaginator = props => {
  return (
    h("div", { className: "scroller-pagination" },
    props.paginator ? props.paginator.getPages().map((page, index) => {
      return (
        h("span", { className: props.page === page ? 'scroller-pagination-page scroller-pagination-page--active' : 'scroller-pagination-page' }));

    }) : null));


};

const ScrollerNavigation = ({ paginator, onClickPrev, onClickNext }) => {
  return (
    h("div", { className: "scroller-nav" },
    paginator && 1 < paginator.getPage() ?
    h("button", { className: "scroller-nav-button scroller-nav-button--prev", type: "button", onClick: onClickPrev },
    h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" }))) :

    null,

    paginator && paginator.getTotalPages() > paginator.getPage() ?
    h("button", { className: "scroller-nav-button scroller-nav-button--next", type: "button", onClick: onClickNext },
    h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" }))) :

    null));


};

const ScrollerItem = ({ item, width }) => {
  return (
    h("div", { className: item.type ? 'scroller-item scroller-item--' + item.type : 'scroller-item', style: {
        flex: '0 0 ' + width } },

    h("div", { className: "card" },
    h("div", { className: "card-img" },
    h("img", { src: item.img })))));




};

class Scroller extends Component
{
  constructor(props)
  {
    super(props);
    this.onClickHandler = _.debounce(
    this.goto, 325, { leading: true });


    this.sliderRef = preact.createRef();
  }

  componentDidMount()
  {
    const current = this.props.current || 0;
    this.props.dataSource(this.props.itemsPerPage).then(paginator => {
      this.setState({
        current: current,
        paginator: paginator,
        items: paginator.getItems(current) });

    });

  }

  goto(value)
  {
    if (0 === value) {
      return;
    }

    var offset = 0 < value ?
    '-' + this.computeOffset(200, this.props.itemsPerPage) + '%' :
    '-' + this.computeOffset(0, this.props.itemsPerPage) + '%';


    const newCurrent = this.state.current + value * this.props.itemsPerPage;

    if (0 < value && this.state.paginator.getData().length <= newCurrent) {
      return;
    }

    if (0 > value && 0 > newCurrent) {
      return;
    }

    if (0 < value && 0 === this.state.current) {
      offset = '-' + this.computeOffset(100, this.props.itemsPerPage) + '%';
    }

    anime({
      complete: () => {
        this.state.paginator.setPage(this.state.paginator.getPage() + value);
        this.setState({
          current: newCurrent,
          items: this.state.paginator.getItems(newCurrent) });

      },
      delay: 75,
      duration: 200,
      easing: 'easeOutQuad',
      targets: this.sliderRef.current,
      translateX: offset });

  }

  computeOffset(baseOffset, itemsPerPage)
  {
    return baseOffset + 100 / itemsPerPage;
  }

  render() {
    const computedWidth = 100 / this.props.itemsPerPage + '%';
    return (
      h("div", { className: "scroller" },
      h("div", { className: "scroller-block scroller-block--header" },
      h("h3", { className: "scroller-title" }, this.props.title),
      this.state.paginator ?
      h(ScrollerPaginator, { paginator: this.state.paginator, page: this.state.current / this.props.itemsPerPage, itemsPerPage: this.props.itemsPerPage }) :
      null),

      h("div", { className: "scroller-row" },
      h(ScrollerNavigation, { paginator: this.state.paginator, onClickPrev: this.onClickHandler.bind(this, -1), onClickNext: this.onClickHandler.bind(this, 1) }),

      this.state.paginator ?
      h("div", { className: "scroller-items", ref: this.sliderRef, style: {
          'transform': this.state.current > 0 ?
          'translateX(-' + this.computeOffset(100, this.state.paginator.getItemsPerPage()) + '%' :
          'translateX(-' + this.computeOffset(0, this.state.paginator.getItemsPerPage()) + '%)' } },

      this.state.paginator.getItemsPerPage() >= this.state.current ?
      h(ScrollerItem, { item: { type: 'placeholder' }, width: computedWidth }) :
      null,

      this.state.paginator.getItems(this.state.current).map((item, index) =>
      h(ScrollerItem, {
        key: 'scroller-item--' + index,
        item: item,
        width: computedWidth }))) :




      h("div", { className: "scroller-items" },
      Array(this.props.itemsPerPage + 1).fill(0).map(Number.call, Number).map((item) =>
      h(ScrollerItem, { item: { type: 'loader' }, width: computedWidth }))))));






  }}


render(
h("div", null,
h(Scroller, { itemsPerPage: 4, dataSource: itemsPerPage => {
    const baseData = [
    { img: 'https://source.unsplash.com/mcr1Z0kPGTY/900x485' },
    { img: 'https://source.unsplash.com/W0hkz1EnX8I/900x485' },
    { img: 'https://source.unsplash.com/ERp-CAJ3oFU/900x485' },
    { img: 'https://source.unsplash.com/CiUR8zISX60/900x485' },
    { img: 'https://source.unsplash.com/L-Z2Vg3xHqw/900x485' },
    { img: 'https://source.unsplash.com/atsUqIm3wxo/900x485' },
    { img: 'https://source.unsplash.com/_0I4rH8XtgM/900x485' },
    { img: 'https://source.unsplash.com/U1iYwZ8Dx7k/900x485' },
    { img: 'https://source.unsplash.com/kKLEgX-Z_O4/900x485' },
    { img: 'https://source.unsplash.com/V7h9T-kRPpg/900x485' },
    { img: 'https://source.unsplash.com/HCsvNhdURJc/900x485' },
    { img: 'https://source.unsplash.com/meqVd5zwylI/900x485' },
    { img: 'https://source.unsplash.com/DrWJcRk8oBE/900x485' },
    { img: 'https://source.unsplash.com/HuNenPCNG84/900x485' },
    { img: 'https://source.unsplash.com/1RauOvwrXLU/900x485' },
    { img: 'https://source.unsplash.com/Erstoy-MuVA/900x485' },
    { img: 'https://source.unsplash.com/RO9swiZgqeg/900x485' },
    { img: 'https://source.unsplash.com/4V07cUP8Sxc/900x485' },
    { img: 'https://source.unsplash.com/jSRkyHyQUWQ/900x485' },
    { img: 'https://source.unsplash.com/M4b_usCBIWw/900x485' },
    { img: 'https://source.unsplash.com/6SY0Ac9AxrM/900x485' }];


    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(new Paginator(baseData, itemsPerPage));
      }, 3200);
    });
  }, title: "Discover new stuff around you." }),
h(Scroller, { itemsPerPage: 5, dataSource: itemsPerPage => {
    const baseData = [
    { img: 'https://source.unsplash.com/VK284NKoAVU/485x900' },
    { img: 'https://source.unsplash.com/as50zkwpkjs/485x900' },
    { img: 'https://source.unsplash.com/VHjZAFUBq7w/485x900' },
    { img: 'https://source.unsplash.com/GEnFf7M-uVg/485x900' },
    { img: 'https://source.unsplash.com/Rs9ypWXB1vE/485x900' },
    { img: 'https://source.unsplash.com/DotjMQIN38U/485x900' },
    { img: 'https://source.unsplash.com/_0I4rH8XtgM/485x900' },
    { img: 'https://source.unsplash.com/9Ku-rYWKLsI/485x900' },
    { img: 'https://source.unsplash.com/lWrD_CskDBU/485x900' },
    { img: 'https://source.unsplash.com/tEbRUeGJDfw/485x900' },
    { img: 'https://source.unsplash.com/uTncCwD0tjY/485x900' },
    { img: 'https://source.unsplash.com/PXlTuz40vtY/485x900' },
    { img: 'https://source.unsplash.com/6wjcY_hdijM/485x900' },
    { img: 'https://source.unsplash.com/U1iYwZ8Dx7k/485x900' }];

    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(new Paginator(baseData, itemsPerPage));
      }, 2500);
    });
  }, title: "On other networks" })),

document.getElementById('root'));