import styles from './AboutSection.module.scss'

const AboutSection = ({ profileInfo, isAuthenticatedUserProfile }) => {
  const {
    email,
    address: { street, suite, city, zipcode },
    phone,
    website,
    company: { name: companyName },
  } = profileInfo

  return (
    <table className={`table table-striped ${styles.about}`}>
      <tbody>
        {isAuthenticatedUserProfile && (
          <tr>
            <th scope="row">Address</th>
            <td>
              {street} {suite}, {city} {zipcode}
            </td>
          </tr>
        )}
        <tr>
          <th scope="row">Email</th>
          <td>{email}</td>
        </tr>
        {isAuthenticatedUserProfile && (
          <tr>
            <th scope="row">Phone</th>
            <td>{phone}</td>
          </tr>
        )}
        <tr>
          <th scope="row">Company</th>
          <td>{companyName}</td>
        </tr>
        <tr>
          <th scope="row">Website</th>
          <td>{website}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default AboutSection
