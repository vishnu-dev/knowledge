import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Professional Experience',
    image: require('@site/static/img/online_learning.png').default,
    description: (
      <>
          In this category, you'll find valuable insights and tips on how to excel in your career,
          develop essential skills, and build a strong professional network.
          Whether you're just starting out or looking to take your career to the next level,
          you'll find useful information and resources to help you achieve your goals.
      </>
    ),
  },
  {
    title: 'Coding Journey',
    image: require('@site/static/img/coding.png').default,
    description: (
      <>
          We'll discover the power of programming, the endless possibilities it offers,
          and the joy of seeing your code come to life.
      </>
    ),
  },
  {
    title: 'Academic Odyssey',
    image: require('@site/static/img/study.png').default,
    description: (
      <>
          Whether you're a student, teacher, researcher, or just someone who loves to learn,
          my Academic category has something for you. Check out our Academic category to discover
          a wide range of topics related to education and research.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center padding-horiz--md">
            <h2>Categories</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
