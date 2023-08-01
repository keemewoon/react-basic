import PropTypes from 'prop-types';

const Card = ({ title, onClick, children }) => {
  //{title: 'title'}

  return (
    <div 
        className="card mb-3 cursor-pointer" 
        onClick={onClick}
    >
      <div className="card-body py-2 d-flex align-items-center">
          <div className="flex-grow-1">{title}</div>
          {children && <div>{children}</div>}
      </div>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string.isRequired, //Title의 경우 항상 필수값을 설정한다. 
    children: PropTypes.element,
    onClick: PropTypes.func,
};

Card.defaultProps = {
    children: null,
    onClick: () => {}
}

// Card.defaultProps = {
//     title: 'Title'
// }

export default Card;
