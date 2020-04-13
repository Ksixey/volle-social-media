import {connect} from "react-redux";
import { newCurrentPage, getUsers, getUnfollowAC, getFollowAC} from "../Components/reducers/UserReducer/UserReducer";
import React from "react";
import {Users} from "../Components/Users/Users";
import {Preloader} from "../Components/Common/Preloader/Preloader";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {getUsersSuperSelector, getPageSizeSelector, getTotalUsersCountSelector, getCurrentPageSelector, getIsFetchingSelector, getFollowingInProgressSelector} from "../Components/reducers/UsersSelectors/UsersSelectors";
import {getIsAuthSelector} from "../Components/reducers/AuthSelector/AuthSelector";
import {compose} from "redux";
import {Paginator} from "../Components/Common/Paginator/Paginator"


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.newCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return <>
            <Paginator currentPage={ this.props.currentPage} onPageChanged={ this.onPageChanged}
        totalItemsCount={ this.props.totalUsersCount} pageSize={ this.props.pageSize} />
        
            {this.props.isFetching ? <Preloader /> : <Users {...this.props}
                                                        onPageChanged={this.onPageChanged}
            />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProcess: getFollowingInProgressSelector(state),
        isAuth: getIsAuthSelector(state)
    }
};

export default compose(
    connect(mapStateToProps,{newCurrentPage,
    getUsers, getUnfollowAC, getFollowAC}),
    withAuthRedirect
)(UsersContainer)