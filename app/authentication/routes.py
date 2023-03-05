from tabnanny import check
from forms import UserLoginForm
from models import User, db, check_password_hash
from flask import Blueprint, render_template, request, redirect, url_for, flash

# Imports for flask
from flask_login import login_user, logout_user, LoginManager, current_user, login_required

auth = Blueprint('auth', __name__, template_folder='auth_templates')

@auth.route('/sign_up', methods = ['GET', 'POST'])
def sign_up():
    form = UserLoginForm()

    try:
        if request.method == 'POST' and form.validate_on_submit():
            email = form.email.data
            password = form.password.data
            print(email, 'password created')

            user = User(email, password = password)

            db.session.add(user)
            db.session.commit()

            flash(f'You have successfully created user account {email}', 'user-created')
            return redirect(url_for('site.home'))
    except:
        raise Exception('Invalid form data: please check your form and try again.')
    return render_template('sign_up.html', form=form)

@auth.route('/sign_in', methods = ['GET', 'POST'])
def sign_in():
    form = UserLoginForm()

    try:
        if request.method == 'POST' and form.validate_on_submit():
            email = form.email.data
            password = form.password.data
            print(email, 'password entered')

            logged_user = User.query.filter(User.email == email).first()
            if logged_user and check_password_hash(logged_user.password, password):
                login_user(logged_user)
                flash('Success!', 'auth-success')
                return redirect(url_for('site.profile'))
            else:
                flash('Your email or password is incorrect.', 'auth-failed')
                return redirect(url_for('auth.sign_in'))
    except:
        raise Exception('Invalid Form Data: Please check your form and try again.')
    return render_template('sign_in.html', form=form)

@auth.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('site.home'))