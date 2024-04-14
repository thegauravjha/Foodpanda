import { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("mounted")
    }

    render() {
        console.log("Render");
        return (
            <div className='main_container'>
                <h1 className='main_heading'>Welcome to FoodPanda!</h1>
                <p className='about_content'>Are you craving delicious meals delivered straight to your doorstep? Look no further than FoodPanda!
                    Our website is designed to bring joy, comfort, and convenience to your dining experience.
                </p>
                <h3 className='sub_heading'>About the Website:</h3>
                <p className='about_content'>FoodPanda is not just a food delivery service; it's a project crafted with passion and technology.
                    Our website is built using cutting-edge tools and frameworks, including React.js, Parcel, and
                    Tailwind CSS. We've invested time and expertise into creating a seamless and user-friendly
                    platform that makes ordering food a breeze.
                </p>
                <h3 className='sub_heading'>Development Highlights</h3>
                <ul className='list'>
                    <li className='list_content'>Leveraged live <strong>API data</strong>, developed mock for seamless deployment.</li>
                    <li className='list_content'>Opted for <strong>React.js</strong> due to its robustness and ecosystem.</li>
                    <li className='list_content'>Chose <strong>Tailwind CSS</strong> for rapid UI development and customization.</li>
                    <li className='list_content'>Utilized <strong>Parcel</strong> bundler for efficient asset bundling:
                        <ul className='sub_list'>
                            <li className='sub_list_content'><strong>Zero configuration</strong> setup for quick project start.</li>
                            <li className='sub_list_content'>Automatic asset <strong>optimization</strong> for improved performance.</li>
                            <li className='sub_list_content'>Support for various file types including <strong>JavaScript, CSS, HTML</strong>, and more.</li>
                            <li className='sub_list_content'>Built-in <strong>hot module replacement</strong> for seamless development experience.</li>
                            <li className='sub_list_content'>Automatic <strong>code splitting</strong> for optimized loading times.</li>
                            <li className='sub_list_content'>Support for both <strong>development and production</strong> modes.</li>
                            <li className='sub_list_content'>Integrated support for popular <strong>JavaScript frameworks</strong> and libraries.</li>
                            <li className='sub_list_content'>Efficient <strong>caching mechanism</strong> for faster rebuilds.</li>
                            <li className='sub_list_content'>Ability to <strong>handle dependencies</strong> with ease.</li>
                            <li className='sub_list_content'>Extensive <strong>plugin ecosystem</strong> for extending functionality as needed.</li>
                        </ul>
                    </li>
                    <li className='list_content'>Meticulously <strong>designed UI</strong> with thoughtful color choices for enhanced <strong>user experience</strong>.</li>
                    <li className='list_content'>Implemented <strong>shimmer</strong> effect for smoother loading transitions.</li>
                    <li className='list_content'>Incorporated <strong>lazy loading</strong> for improved page performance.</li>
                    <li className='list_content'>Leveraged <strong>functional-based</strong> components for cleaner code organization.</li>
                    <li className='list_content'>Developed a feature-rich <strong>shopping cart</strong> for seamless ordering.</li>
                    <li className='list_content'>Implemented <strong>accordion-style</strong> menu for easier navigation.</li>
                    <li className='list_content'>Utilized <strong>dynamic React routing</strong> for a fluid user journey.</li>
                    <li className='list_content'>Employed <strong>React Redux</strong> for efficient state management.</li>
                    <li className='list_content'>Wrote comprehensive test cases using <strong>Jest</strong> for robust code testing.</li>
                    <li className='list_content'>Implemented <strong>error handling</strong> to gracefully manage null or incorrect API data.</li>
                </ul>
                <h3 className='sub_heading'>Craving a chat? Let's grab a virtual coffee together!</h3>
                <h4 className='sub_heading'>Questions, feedback, or just want to say hello? We're all ears!</h4>
                <p>Reach out to us through these channels:</p>
                <ul className='reach_out_list'>
                    <li className='reach_out_content'><span>💌 Email:</span> <a href="mailto:gaurav.jhaji20@gmail.com" target="_blank">gaurav.jhaji20@gmail.com</a></li>
                    <li className='reach_out_content'><span>🌐 LinkedIn:</span> <a href="https://www.linkedin.com/in/gauravjhacode/" target="_blank">https://www.linkedin.com/in/gauravjhacode/</a></li>
                    <li className='reach_out_content'><span>🔍 GitHub:</span> <a href="https://github.com/thegauravjha/" target="_blank">https://github.com/thegauravjha/</a></li>
                    <li className='reach_out_content'><span>✏️ Codepen:</span> <a href=" https://codepen.io/thegauravjha/" target="_blank"> https://codepen.io/thegauravjha/</a></li>
                </ul>
                <p className='thanks_content'>Thanks a latte for choosing FoodPanda for your culinary adventures!"</p>
            </div>
        )
    }
}

export default About;