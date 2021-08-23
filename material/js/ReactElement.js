// img標籤元件
class MffImg extends React.Component {
    render() {
        return <img
            className={this.props.className}
            src={this.props.src}
            onClick={this.props.onClick}
            style={{ display: this.props.display }}
        ></img>;
    }
}
// a標籤元件
class MffA extends React.Component {
    render() {
        return <a
            className={this.props.className}
            href={this.props.href}>
            {this.props.text}
        </a>;
    }
}
// P標籤元件
class MffP extends React.Component {
    render() {
        return <p className={this.props.className}
            onClick={this.props.onClick}>
            {this.props.text}
        </p>;
    }
}
// Input標籤元件
class MffInput extends React.Component {
    render() {
        return <input
            type={this.props.type}
            className={this.props.className}
            placeholder={this.props.placeholder}>
        </input>;
    }
}
// button標籤元件
class MffBtn extends React.Component {
    render() {
        return <button
            style={{ display: this.props.display }}
            className={this.props.className}
            onClick={this.props.onClick}>
            {this.props.text}
            {this.props.type}
        </button>;
    }
}
// h1標籤元件
class MffH1 extends React.Component {
    render() {
        return <h1
            className={this.props.className}>
            {this.props.text}
        </h1>;
    }
}
// h2標籤元件
class MffH2 extends React.Component {
    render() {
        return <h2
            style={{ color: this.props.color }}
            className={this.props.className}>
            {this.props.text}
        </h2>;
    }
}
// h3標籤元件
class MffH3 extends React.Component {
    render() {
        return <h3
            style={{ color: this.props.color }}
            className={this.props.className}>
            {this.props.text}
        </h3>;
    }
}
// h4標籤元件
class MffH4 extends React.Component {
    render() {
        return <h4
            style={{ color: this.props.color }}
            className={this.props.className}>
            {this.props.text}
        </h4>;
    }
}
// h5標籤元件
class MffH5 extends React.Component {
    render() {
        return <h5
            className={this.props.className}>
            {this.props.text}
        </h5>;
    }
}
// h6標籤元件
class MffH6 extends React.Component {
    render() {
        return <h6
            style={{ display: this.props.display }}
            className={this.props.className}>
            {this.props.text}
        </h6>;
    }
}
// span標籤元件
class MffSpan extends React.Component {
    render() {
        return <span
            style={{ display: this.props.display }}
            className={this.props.className}
            onClick={this.props.onClick}>
            {this.props.text}
        </span>;
    }
}
// option標籤元件
class MffOption extends React.Component {
    render() {
        return <option
            value={this.props.value}
            style={{ display: this.props.display, backgroundColor: this.props.backgroundColor, color: this.props.color, fontSize: this.props.fontSize }}>
            {this.props.text}
        </option>;
    }
}