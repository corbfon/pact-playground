import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  update(user: User) {
    const updatableFields: string[] = [
      'firstName',
      'lastName',
      'role',
      'dept',
      'newsletter_pref',
      'survey_pref'
    ]
    let updateBody = {}

    // copy over only the updatable fields
    for(let field of updatableFields) {
      updateBody[field] = user[field]
    }

    return this._http.put(
      '/api/v1/user',
      { user },
      { withCredentials: true }
    )
  }
}

interface User {
  firstName: string
  lastName: string
  role: string
  dept: string
  newsletter_pref: string
  survey_pref: string
}