import React, { useState } from 'react';
import { Link } from 'react-scroll';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Carousel from 'react-multi-carousel';

const Body = () => {
  const [num, setNum] = useState(0);
  const handleClick = (event, id) => {
    setNum(id);
    console.log(id);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        paddingBottom: '100px',
      }}
    >
      <div
        style={{
          position: 'fixed',
          right: 5,
          marginRight: '40px',
          marginTop: '60px',
        }}
      >
        {/* MAKE UL OWN COMPONENT AND CHANGE HIGHLIGHT ON CLICK WITH STATE LATER */}
        <ul>
          <li className="menu">
            <Link
              activeClass="active"
              to="breastType"
              spy={true}
              smooth={true}
              className={num === 1 ? 'clicked' : 'menu'}
              onClick={(event) => handleClick(event, 1)}
            >
              breast type
            </Link>
          </li>
          <li className="menu">
            <Link
              to="traits"
              spy={true}
              smooth={true}
              className={num === 2 ? 'clicked' : 'menu'}
              onClick={(event) => handleClick(event, 2)}
            >
              traits
            </Link>
          </li>
          <li className="menu" id="3">
            <Link
              to="braType"
              spy={true}
              smooth={true}
              className={num === 3 ? 'clicked' : 'menu'}
              onClick={(event) => handleClick(event, 3)}
            >
              bra type
            </Link>
          </li>
          <li className="menu" id="4">
            <Link
              to="brandRecs"
              spy={true}
              smooth={true}
              className={num === 4 ? 'clicked' : 'menu'}
              onClick={(event) => handleClick(event, 4)}
            >
              brand recs
            </Link>
          </li>
          <li className="menu" id="5">
            <Link
              to="contentRecs"
              spy={true}
              smooth={true}
              className={num === 5 ? 'clicked' : 'menu'}
              onClick={(event) => handleClick(event, 5)}
            >
              content recs
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div id="breastType" style={{ width: '500px', height: '500px' }}>
          <h1>This is the breast type section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="traits" style={{ width: '500px', height: '500px' }}>
          <h1>This is the traits section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="braType" style={{ width: '500px', height: '500px' }}>
          <h1>This is the bra type section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="brandRecs" style={{ width: '500px', height: '500px' }}>
          <h1>This is the brand recs section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="contentRecs" style={{ width: '500px', height: '500px' }}>
          <h1>This is the content recs section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
      </div>
      <div
        id="carousel"
        style={{
          width: '600px',
          height: '250px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Carousel
          autoPlay={false}
          responsive={responsive}
          infinite={false}
          showDots={true}
        >
          <div style={{ width: '150px' }}>
            <img
              src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwOC1uYW1jaGEtMDRfMS5qcGc.jpg?s=K6vUH5pKheEoKs52Oo3GVnNEJ0C_7VMZElyi2xe90MA"
              alt="strawberry"
              style={{ width: '150px' }}
            />
          </div>
          <div style={{ width: '150px' }}>
            <img
              src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwOC1uYW1jaGEtMDFfMS5qcGc.jpg?s=OV8KbNFFoqwaX35dvwTkz96BEUrXPA7hEC8kJ5-FPaM"
              alt="orange"
              style={{ width: '150px' }}
            />
          </div>
          <div style={{ width: '150px' }}>
            <img
              src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwOC1uYW1jaGEtMDMta3phZ3FjdXouanBn.jpg?s=xGR83fm0juhWNadxO12fGqzF_h3pO2RqsWFoELaYIwM"
              alt="orange"
              style={{ width: '150px' }}
            />
          </div>
          <div style={{ width: '150px' }}>
            <img
              src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwOC1uYW1jaGEtMDUuanBn.jpg?s=kGslvvMSGCxd3yWB3EV7qCUG8L4yDflmjNP8Ws71I1g"
              alt="apple"
              style={{ width: '150px' }}
            />
          </div>
          <div style={{ width: '150px' }}>
            <img
              src="
                https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwOC1uYW1jaGEtMDYuanBn.jpg?s=QwN3MUiehRy3lPsJvB09x7xHeoHPTBGH1RQdUHmTwbU"
              alt="pom"
              style={{ width: '150px' }}
            />
          </div>
          <div style={{ width: '150px' }}>
            <img
              src="
                  https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjkwOC1uYW1jaGEtMDdfMS5qcGc.jpg?s=cNz-RJ17HI1pZsceq1VpSOUd5wIS5bpotEBMjBBR11Y"
              alt="pear"
              style={{ width: '150px' }}
            />
          </div>
        </Carousel>
      </div>
      <div
        id="emailSubmission"
        style={{ width: '400px', position: 'absolute', left: '0' }}
      >
        <form action="">
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            size="small"
          />
          <Button
            variant="outlined"
            size="medium"
            style={{ marginLeft: '5px', marginTop: '2px' }}
            disableElevation
          >
            submit
          </Button>
        </form>
      </div>
      <div />
    </div>
  );
};

export default Body;
